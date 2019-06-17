import React, { SFC } from 'react';
import styled from 'styled-components';

import RowListLayout from '../../layouts/RowListLayout';
import CardSimpleLayout from './CardSimpleLayout';
import Center from '../../layouts/Center';
import { platformList } from '../../constants';

const PlatformListCard = () => (
  <CardSimpleLayout>
    {{
      header: <PlatformListCardTitle />,
      body: (
        <RowListLayout.Repeat interval="10px">
          {platformList.map(platformCardProps => (
            <PlatformCard {...platformCardProps} />
          ))}
        </RowListLayout.Repeat>
      ),
    }}
  </CardSimpleLayout>
);

const PlatformListCardTitle = styled.div.attrs({
  children: '스낵뉴스를 원하는 플랫폼에서 챙겨보세요',
})`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

interface PlatformCardProps {
  platformName: string;
  backgroundColor?: string;
  color?: string;
}

const PlatformCard: SFC<PlatformCardProps> = ({ platformName, backgroundColor, color }) => (
  <PlatformCardWrapper style={{ backgroundColor, color }}>
    <PlatformCardLabel>
      {platformName}
      <br />
      에서 보기
    </PlatformCardLabel>
  </PlatformCardWrapper>
);

const PlatformCardWrapper = styled(Center)`
  width: 81px;
  height: 75px;
  border-radius: 5px;
  flex: none;
  color: #fefefe;
`;

const PlatformCardLabel = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

export default PlatformListCard;
