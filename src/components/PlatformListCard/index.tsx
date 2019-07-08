import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Center, RowListLayout, CardSimpleLayout } from 'Layouts/index';
import { platformList } from 'Config/index';

export const PlatformListCard = () => (
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
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

interface IPlatformCardProps {
  platformName: string;
  backgroundColor?: string;
  color?: string;
  link: string;
}

const PlatformCard: FunctionComponent<IPlatformCardProps> = ({
  platformName,
  backgroundColor,
  color,
  link,
}) => (
  <PlatformCardWrapper style={{ backgroundColor, color }} href={link}>
    <Center>
      <PlatformCardLabel>
        {platformName}
        <br />
        에서 보기
      </PlatformCardLabel>
    </Center>
  </PlatformCardWrapper>
);

const PlatformCardWrapper = styled.a`
  display: flex;
  width: 81px;
  height: 75px;
  border-radius: 5px;
  flex: none;
  color: #fefefe;
  text-decoration: none;
`;

const PlatformCardLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
