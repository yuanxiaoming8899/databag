import { Drawer, Input, List } from 'antd';
import { CardsWrapper } from './Cards.styled';
import { SortAscendingOutlined, UpOutlined, DoubleRightOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useCards } from './useCards.hook';
import { CardItem } from './cardItem/CardItem';

export function Cards({ closeCards, openContact, openListing }) {

  const { state, actions } = useCards();

  return (
    <CardsWrapper>
      <div class="search">
        { !state.sorted && (
          <div class="unsorted" onClick={() => actions.setSort(true)}>
            <SortAscendingOutlined />
          </div>
        )}
        { state.sorted && (
          <div class="sorted" onClick={() => actions.setSort(false)}>
            <SortAscendingOutlined />
          </div>
        )}
        <div class="filter">
          <Input bordered={false} allowClear={true} placeholder="Contacts" prefix={<SearchOutlined />}
              spellCheck="false" onChange={(e) => actions.onFilter(e.target.value)} />
        </div>
        { state.display === 'small' && (
          <div class="inline">
            <div class="add">
              <UserOutlined />
              <div class="label">New</div>
            </div>
          </div>
        )}
        { state.display !== 'small' && (
          <div class="inline">
            <div class="dismiss" onClick={closeCards} >
              <DoubleRightOutlined />
            </div>
          </div>
        )}
      </div>
      <div class="view">
        <List local={{ emptyText: '' }} itemLayout="horizontal" dataSource={state.cards} gutter="0"
          renderItem={item => (
            <CardItem item={item} open={openContact} />
          )} />
      </div>
      { state.display !== 'small' && (
        <div class="bar">
          <div class="add" onClick={openListing}>
            <UpOutlined />
            <div class="label">Find New Contact</div>
          </div>
        </div>
      )}
      </CardsWrapper>
  );
}

