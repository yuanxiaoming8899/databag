import { TopicItemWrapper } from './TopicItem.styled';
import { VideoAsset } from './videoAsset/VideoAsset';
import { AudioAsset } from './audioAsset/AudioAsset';
import { ImageAsset } from './imageAsset/ImageAsset';
import { Logo } from 'logo/Logo';
import { Space, Skeleton, Button, Modal, Input } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined, EditOutlined, FireOutlined, PictureOutlined } from '@ant-design/icons';
import { Carousel } from 'carousel/Carousel';

export function TopicItem({ host, topic, remove }) {

  const [ modal, modalContext ] = Modal.useModal();

  const removeTopic = () => {
    modal.confirm({
      title: 'Do you want to delete this message?',
      icon: <ExclamationCircleOutlined />,
      bodyStyle: { padding: 16 },
      okText: 'Yes, Delete',
      cancelText: 'No, Cancel',
      onOk:  async () => {
        try {
          await remove();
        }
        catch(err) {
          console.log(err);
          modal.error({
            title: 'Failed to Delete Message',
            content: 'Please try again.',
            bodyStyle: { padding: 16 },
          });
        }
      },
    });
  }

  const renderAsset = (asset, idx) => {
    if (asset.image) {
      return <ImageAsset thumbUrl={topic.assetUrl(asset.image.thumb, topic.id)}
          fullUrl={topic.assetUrl(asset.image.full, topic.id)} />
    }
    if (asset.video) {
      return <VideoAsset thumbUrl={topic.assetUrl(asset.video.thumb, topic.id)}
          lqUrl={topic.assetUrl(asset.video.lq, topic.id)} hdUrl={topic.assetUrl(asset.video.hd, topic.id)} />
    }
    if (asset.audio) {
      return <AudioAsset label={asset.audio.label} audioUrl={topic.assetUrl(asset.audio.full, topic.id)} />
    }
    return <></>
  }

  return (
    <TopicItemWrapper>
      { modalContext }
      <div class="topic-header">
        <div class="avatar">
          <Logo width={32} height={32} radius={4} url={topic.imageUrl} />
        </div>
        <div class="info">
          <div class={ topic.nameSet ? 'set' : 'unset' }>{ topic.name }</div>
          <div>{ topic.createdStr }</div>
        </div>
        <div class="topic-options">
          <div class="buttons">
            { topic.creator && (
              <div class="button edit" onClick={() => console.log('edit')}>
                <EditOutlined />
              </div>
            )}
            { (host || topic.creator) && (
              <div class="button remove" onClick={removeTopic}>
                <DeleteOutlined />
              </div>
            )}
          </div>
        </div>
      </div>
      { topic.status !== 'confirmed' && (
        <div class="skeleton">
          <Skeleton size={'small'} active={true} title={false} />
        </div>
      )}
      { topic.status === 'confirmed' && (
        <>
          { topic.assets?.length && (
            <>
              { topic.transform === 'error' && (
                <div class="asset-placeholder">
                  <FireOutlined style={{ fontSize: 32, color: '#ff8888' }} />
                </div>
              )}
              { topic.transform === 'incomplete' && (
                <div class="asset-placeholder">
                  <PictureOutlined style={{ fontSize: 32 }} />
                </div>
              )}
              { topic.transform === 'complete' && (
                <div class="topic-assets">
                  <Carousel pad={40} items={topic.assets} itemRenderer={renderAsset} />
                </div>
              )}
            </>
          )}
          <div class="message">
            <div style={{ color: topic.textColor, fontSize: topic.textSize }}>{ topic.text }</div>
          </div>
        </>
      )}
    </TopicItemWrapper>
  )
}

