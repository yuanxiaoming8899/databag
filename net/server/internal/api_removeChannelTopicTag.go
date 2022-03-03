package databag

import (
  "time"
  "errors"
  "net/http"
  "gorm.io/gorm"
  "github.com/gorilla/mux"
  "databag/internal/store"
)

func RemoveChannelTopicTag(w http.ResponseWriter, r *http.Request) {

  // scan parameters
  params := mux.Vars(r)
  channelId := params["channelId"]
  topicId := params["topicId"]
  tagId := params["tagId"]

  channelSlot, guid, err, code := getChannelSlot(r, false)
  if err != nil {
    ErrResponse(w, code, err)
    return
  }
  act := &channelSlot.Account

  // load topic
  var topicSlot store.TopicSlot
  if ret := store.DB.Preload("Topic.Tags.TagSlot").Preload("Topic.Channel.ChannelSlot").Where("account_id = ? AND topic_slot_id = ?", act.ID, topicId).First(&topicSlot).Error; ret != nil {
    if errors.Is(err, gorm.ErrRecordNotFound) {
      ErrResponse(w, http.StatusNotFound, ret)
    } else {
      ErrResponse(w, http.StatusInternalServerError, ret)
    }
  }
  if topicSlot.Topic == nil {
    ErrResponse(w, http.StatusNotFound, errors.New("referenced empty topic"))
    return
  }
  if topicSlot.Topic.Channel.ChannelSlot.ChannelSlotId != channelId {
    ErrResponse(w, http.StatusNotFound, errors.New("channel topic not found"))
    return
  }

  // extract specified tag
  var tag *store.Tag
  var tags []store.Tag
  for _, t := range topicSlot.Topic.Tags {
    if t.TagSlot.TagSlotId == tagId {
      tag = &t
    } else {
      tags = append(tags, t)
    }
  }
  topicSlot.Topic.Tags = tags;

  // check if tag was found
  if tag == nil {
    ErrResponse(w, http.StatusNotFound, errors.New("tag not found"))
    return
  }

  // check permission
  if tag.Guid != guid {
    ErrResponse(w, http.StatusUnauthorized, errors.New("not creator of tag"))
    return
  }

  err = store.DB.Transaction(func(tx *gorm.DB) error {

    if res := tx.Delete(tag).Error; res != nil {
      return res
    }
    if res := tx.Model(&tag.TagSlot).Update("revision", act.ChannelRevision + 1).Error; res != nil {
      return res
    }
    if res := tx.Model(&topicSlot.Topic).Update("tag_count", len(topicSlot.Topic.Tags)).Error; res != nil {
      return res
    }
    if res := tx.Model(&topicSlot.Topic).Update("tag_revision", act.ChannelRevision + 1).Error; res != nil {
      return res
    }
    if res := tx.Model(&topicSlot.Topic).Update("tag_updated", time.Now().Unix()).Error; res != nil {
      return res
    }
    if res := tx.Model(&topicSlot).Update("revision", act.ChannelRevision + 1).Error; res != nil {
      return res
    }
    if res := tx.Model(&channelSlot).Update("revision", act.ChannelRevision + 1).Error; res != nil {
      return res
    }
    if res := tx.Model(act).Update("channel_revision", act.ChannelRevision + 1).Error; res != nil {
      return res
    }
    return nil
  })
  if err != nil {
    ErrResponse(w, http.StatusInternalServerError, err)
    return
  }

  // determine affected contact list
  cards := make(map[string]store.Card)
  for _, card := range channelSlot.Channel.Cards {
    cards[card.Guid] = card
  }
  for _, group := range channelSlot.Channel.Groups {
    for _, card := range group.Cards {
      cards[card.Guid] = card
    }
  }

  SetStatus(act)
  for _, card := range cards {
    SetContactChannelNotification(act, &card)
  }
  WriteResponse(w, nil)
}

