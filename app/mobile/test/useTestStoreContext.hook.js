import { useEffect, useState, useRef, useContext } from 'react';
import SQLite from "react-native-sqlite-storage";

export function useTestStoreContext() {
  const [state, setState] = useState({});

  const updateState = (value) => {
    setState((s) => ({ ...s, ...value }))
  }

  const initSession = async (guid) => {
  }

  const actions = {
    init: async () => {
      console.log("TEST STORE INIT");
      return {};
    },
    setSession: async (access) => {
    },
    clearSession: async () => {
    },

    getProfile: async (guid) => {
      return state.profile;
    },
    setProfile: async (guid, profile) => {
      updateState({ profile });
    },
    getFirstRun: async (guid) => {
    },
    setFirstRun: async () => {
    },
    getCardRequestStatus: async (guid) => {
    },
    setCardRequestStatus: async (guid, status) => {
    },
    getProfileRevision: async (guid) => {
      return state.profileRevision;
    },
    setProfileRevision: async (guid, revision) => {
      updateState({ profileRevision: revision });
    },

    getAccountStatus: async (guid) => {
    },
    setAccountStatus: async (guid, status) => {
    },
    getAccountSealKey: async (guid) => {
    },
    setAccountSealKey: async (guid, key) => {
    },
    getAccountRevision: async (guid) => {
    },
    setAccountRevision: async (guid, revision) => {
    }, 

    getCardRevision: async (guid) => {
    },
    setCardRevision: async (guid, revision) => {
    },
    setCardItem: async (guid, card) => {
    },
    clearCardItem: async (guid, cardId) => {
    },
    setCardItemRevision: async (guid, cardId, revision) => {
    },
    setCardItemNotifiedView: async (guid, cardId, notified) => {
    },
    setCardItemNotifiedArticle: async (guid, cardId, notified) => {
    },
    setCardItemNotifiedProfile: async (guid, cardId, notified) => {
    },
    setCardItemNotifiedChannel: async (guid, cardId, notified) => {
    },
    setCardItemOffsync: async (guid, cardId) => {
    },
    clearCardItemOffsync: async (guid, cardId) => {
    },
    setCardItemBlocked: async (guid, cardId) => {
    },
    clearCardItemBlocked: async (guid, cardId) => {
    },
    setCardItemDetail: async (guid, cardId, revision, detail) => {
    },
    setCardItemProfile: async (guid, cardId, revision, profile) => {
    },
    getCardItemStatus: async (guid, cardId) => {
    },
    getCardItemView: async (guid, cardId) => {
    },
    getCardItems: async (guid) => {
    },

    getChannelRevision: async (guid) => {
    },
    setChannelRevision: async (guid, revision) => {
    }, 
    setChannelItem: async (guid, channel) => {
    },
    clearChannelItem: async (guid, channelId) => {
    },
    setChannelItemRevision: async (guid, channelId, revision) => {
    },
    setChannelItemReadRevision: async (guid, channelId, revision) => {
    },
    setChannelItemSyncRevision: async (guid, channelId, revision) => {
    },
    setChannelItemTopicMarker: async (guid, channelId, marker) => {
    },
    setChannelItemBlocked: async (guid, channelId) => {
    },
    clearChannelItemBlocked: async (guid, channelId) => {
    },
    setChannelItemDetail: async (guid, channelId, revision, detail) => {
    },
    setChannelItemUnsealedDetail: async (guid, channelId, revision, unsealed) => {
    },
    setChannelItemSummary: async (guid, channelId, revision, summary) => {
    },
    setChannelItemUnsealedSummary: async (guid, channelId, revision, unsealed) => {
    },
    getChannelItemView: async (guid, channelId) => {
    },
    getChannelItems: async (guid) => {
    },

    getChannelTopicItems: async (guid, channelId) => {
    },
    setChannelTopicItem: async (guid, channelId, topic) => { 
    },
    setChannelTopicItemUnsealedDetail: async (guid, channelId, topicId, revision, unsealed) => {
    },
    clearChannelTopicItem: async (guid, channelId, topicId) => {
    },
    clearChannelTopicItems: async (guid, channelId) => {
    },
    setChannelTopicBlocked: async (guid, channelId, topicId, blocked) => {
    },
    getChannelTopicBlocked: async (guid) => {
    },

    setCardChannelItem: async (guid, cardId, channel) => {
    },
    clearCardChannelItem: async (guid, cardId, channelId) => {
    },
    setCardChannelItemRevision: async (guid, cardId, channelId, revision) => {
    },
    setCardChannelItemReadRevision: async (guid, cardId, channelId, revision) => {
    },
    setCardChannelItemSyncRevision: async (guid, cardId, channelId, revision) => {
    },
    setCardChannelItemTopicMarker: async (guid, cardId, channelId, marker) => {
    },
    setCardChannelItemDetail: async (guid, cardId, channelId, revision, detail) => {
    },
    setCardChannelItemUnsealedDetail: async (guid, cardId, channelId, revision, unsealed) => {
    },
    setCardChannelItemSummary: async (guid, cardId, channelId, revision, summary) => {
    },
    setCardChannelItemUnsealedSummary: async (guid, cardId, channelId, revision, unsealed) => {
    },
    getCardChannelItemView: async (guid, cardId, channelId) => {
    },
    getCardChannelItems: async (guid) => {
    },
    clearCardChannelItems: async (guid, cardId) => {
    },

    getCardChannelTopicItems: async (guid, cardId, channelId) => {
    },    
    setCardChannelTopicItem: async (guid, cardId, channelId, topic) => {
    },
    setCardChannelTopicItemUnsealedDetail: async (guid, cardId, channelId, topicId, revision, unsealed) => {
    },
    clearCardChannelTopicItem: async (guid, cardId, channelId, topicId) => {
    },
    clearCardChannelTopicItems: async (guid, cardId, channelId) => {
    },
    setCardChannelTopicBlocked: async (guid, cardId, channelId, topicId, blocked) => {
    },
    getCardChannelTopicBlocked: async (guid) => {
    },
  }
  return { state, actions }
}
