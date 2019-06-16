import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

import BothMarginWrapper from '../../layouts/BothMarginWrapper';
import Center from '../../layouts/Center';
import RowListLayout from '../../layouts/RowListLayout';

import { arrowLinkImg } from '../../resources';

/* GroupItem 컴포넌트 */
export interface GroupItemProps {
  groupName: string;
  logoImg: string;
}

const GroupItem: SFC<GroupItemProps> = ({ groupName, logoImg }) => (
  <GroupItemLayout>
    {{
      groupIcon: (
        <GroupIconWrapper>
          <GroupIcon src={logoImg} />
        </GroupIconWrapper>
      ),
      groupLabel: <GroupLabel>{groupName}</GroupLabel>,
      arrowIcon: <ArrowIcon />,
    }}
  </GroupItemLayout>
);

export default GroupItem;

/* GroupItemLayout 컴포넌트 */
interface GroupItemLayoutProps {
  children: {
    groupIcon: ReactNode;
    groupLabel: ReactNode;
    arrowIcon: ReactNode;
  };
}

const GroupItemLayout: SFC<GroupItemLayoutProps> = ({
  children: { groupIcon, groupLabel, arrowIcon },
}) => (
  <GroupItemLayoutWrapper>
    <RowListLayout.Detail
      items={[
        {
          el: groupIcon,
          right: '10px',
        },
        {
          el: groupLabel,
          flex: '1',
        },
        {
          el: arrowIcon,
        },
      ]}
    />
  </GroupItemLayoutWrapper>
);

/* GroupItemLayoutWrapper 컴포넌트 */
const GroupItemLayoutWrapper = styled(BothMarginWrapper)`
  padding-top: 12px;
  padding-bottom: 12px;
`;

/* GroupIconWrapper 컴포넌트 */
const ICON_WRAPPER_SIZE = '36px';
const ICON_MAX_SIZE = '24px';

const GroupIconWrapper = styled(Center)`
  width: ${ICON_WRAPPER_SIZE};
  height: ${ICON_WRAPPER_SIZE};

  background-color: #b7b7b7;
  border-radius: 1000px;
  font-size: 10px;
`;

/* GroupIcon 컴포넌트 */
const GroupIcon = styled.img`
  max-width: ${ICON_MAX_SIZE};
  max-height: ${ICON_MAX_SIZE};
`;

/* GroupLabel 컴포넌트 */
const GroupLabel = styled.span`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;

/* ArrowIcon 컴포넌트 */
const ArrowIcon = styled.img.attrs({ src: arrowLinkImg })`
  height: 14px;
`;
