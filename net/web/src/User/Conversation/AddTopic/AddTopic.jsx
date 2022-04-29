import React, { useState, useRef } from 'react';
import { Button, Dropdown, Input, Tooltip, Menu } from 'antd';
import { AddTopicWrapper, BusySpin } from './AddTopic.styled';
import { Carousel } from '../../../Carousel/Carousel';
import { useAddTopic } from './useAddTopic.hook';
import { BgColorsOutlined, FontColorsOutlined, FontSizeOutlined, PaperClipOutlined, SendOutlined } from '@ant-design/icons';

import login from '../../../login.png';
import test from '../../../test.png';


export function AddTopic() {

  let [ items, setItems] = useState([]);
  const { state, actions } = useAddTopic();
  const attachImage = useRef(null);
  const attachAudio = useRef(null);
  const attachVideo = useRef(null);

  const onSelect = (e, action) => {
    var reader = new FileReader();
    reader.onload = () => {
      action(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <input type='file' accept="image/*" ref={attachImage} onChange={e => onSelect(e, actions.addImage)} style={{display: 'none'}}/>
        <div onClick={() => attachImage.current.click()}>Attach Image</div>
      </Menu.Item>
      <Menu.Item key="1">
        <input type='file' accept="audio/*" ref={attachAudio} onChange={e => onSelect(e, actions.addAudio)} style={{display: 'none'}}/>
        <div onClick={() => attachAudio.current.click()}>Attach Audio</div>
      </Menu.Item>
      <Menu.Item key="2">
        <input type='file' accept="video/*" ref={attachVideo} onChange={e => onSelect(e, actions.addVideo)} style={{display: 'none'}}/>
        <div onClick={() => attachVideo.current.click()}>Attach Video</div>
      </Menu.Item>
    </Menu>
  );

  const onSend = () => {
    actions.addTopic();
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (state.messageText) {
        actions.addTopic();
      }
    }
  }

  const renderItem = (item) => {
    if (item.image) {
      return <img style={{ height: '100%', objectFit: 'contain' }} src={item.image} alt="" />
    }
    if (item.audio) {
      return <img style={{ height: '100%', objectFit: 'contain' }} src={test} alt="" />
    }
    if (item.video) {
      return <img style={{ height: '100%', objectFit: 'contain' }} src={login} alt="" />
    }
    return <></>
  }

  const removeItem = (index) => {
    actions.removeAsset(index);
  }

  return (
    <AddTopicWrapper>
      <div class="container noselect">
        <Carousel items={state.assets} itemRenderer={renderItem} itemRemove={removeItem} />
        <div class="input">
          <Input.TextArea placeholder="Message" autoSize={{ minRows: 2, maxRows: 6 }} onKeyPress={onKey}
            onChange={(e) => actions.setMessageText(e.target.value)} value={state.messageText} />
        </div>
        <div class="buttons">
          <div class="option">
            <Dropdown overlay={menu} overlayStyle={{ minWidth: 0 }} trigger={['click']} placement="topRight">
              <Button icon={<PaperClipOutlined />} size="large" />
            </Dropdown>
          </div>
          <div class="option">
            <Button icon={<FontSizeOutlined />} size="large" />
          </div>
          <div class="option">
            <Button icon={<FontColorsOutlined />} size="large" />
          </div>
          <div class="option">
            <Button icon={<BgColorsOutlined />} size="large" />
          </div>
          <div class="send">
            <Button icon={<SendOutlined />} onClick={onSend} size="large" />
            <BusySpin spinning={state.busy} />
          </div>
        </div>
      </div>
    </AddTopicWrapper>
  );

}
 