import React, { SFC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import BarWrapper from '../BarWrapper/index';
import arrowLinkImg from '../../resources/icon/arrow_link.png';

export interface GroupItemProps {
  groupName: string;
  groupId: string;
}

interface GroupTextIconProps {
  groupName: string;
}

const GROUP_MOCK_SIZE = '36px';

const GroupTextIcon: StyledComponent<'div', any, GroupTextIconProps, never> = styled.div.attrs(
  ({ groupName }: GroupTextIconProps) => ({
    children: groupName.slice(0, 1),
  })
)<GroupTextIconProps>`
  width: ${GROUP_MOCK_SIZE};
  height: ${GROUP_MOCK_SIZE};
  background-color: #b7b7b7;
  border-radius: 1000px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const GroupLabel = styled.span`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
  flex: 1;
  padding: 0 10px;
`;

const ArrowIcon = styled.img.attrs({ src: arrowLinkImg })`
  height: 14px;
`;

const GroupItem: SFC<GroupItemProps> = ({ groupName }) => (
  <BarWrapper style={{ height: '60px' }}>
    <GroupTextIcon groupName={groupName} />
    <GroupLabel>{groupName}</GroupLabel>
    <ArrowIcon />
  </BarWrapper>
);

export default GroupItem;
