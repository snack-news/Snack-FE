import React, { SFC } from 'react';
import styled from 'styled-components';
import BarWrapper from '../BarWrapper/index';
import arrowLinkImg from '../../resources/icon/arrow_link.png';

export interface GroupItemProps {
  name: string;
  id: string;
}

interface GroupTextIconProps {
  name: string;
}

const GROUP_MOCK_SIZE = '36px';

const GroupTextIconWrapper = styled.div`
  width: ${GROUP_MOCK_SIZE};
  height: ${GROUP_MOCK_SIZE};
  background-color: #b7b7b7;
  border-radius: 1000px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const GroupTextIcon: SFC<GroupTextIconProps> = ({ name }) => (
  <GroupTextIconWrapper>{name.slice(0, 1)}</GroupTextIconWrapper>
);

const GroupLabel = styled.span`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
  flex: 1;
  padding: 0 10px;
`;

const ArrowIcon = () => <img src={arrowLinkImg} alt="arrow" style={{ height: '14px' }} />;

const GroupItem: SFC<GroupItemProps> = ({ name }) => (
  <BarWrapper style={{ height: '60px' }}>
    <GroupTextIcon name={name} />
    <GroupLabel>{name}</GroupLabel>
    <ArrowIcon />
  </BarWrapper>
);

export default GroupItem;
