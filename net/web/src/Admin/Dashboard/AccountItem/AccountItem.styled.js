import { Button } from 'antd';
import styled from 'styled-components';

export const AccountItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-bottom: 1px solid #eeeeee;

  &:hover {
    background-color: #eeeeee;
  }

  .avatar {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
  }

  .id {
    padding-left: 16px;
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .handle {
      font-size: 0.8em;
      font-weight: bold;
    }

    .guid {
      font-size: 0.8em;
      font-weight: bold;
    }

    .control {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const EnableButton = styled(Button)`
  color: orange;
`;

export const DisableButton = styled(Button)`
  color: orange;
`;

export const ResetButton = styled(Button)`
  color: #1890ff;
`;

export const DeleteButton = styled(Button)`
  color: red;
`