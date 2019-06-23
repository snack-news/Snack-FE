import React, { SFC } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, ColListLayout } from 'Layouts/index';

import { getPickNewsList } from 'Api/index';
import { HorizontalDivider } from 'Templates/index';
import { getHostName } from 'Utils';

// PickNewsList 컴포넌트
interface IPickNewsListProps {}

export const PickNewsList: SFC<IPickNewsListProps> = () => {
  const pickNewsList = getPickNewsList();

  return (
    <ColListLayout.Repeat>
      {pickNewsList.map(pickNewsProps => (
        <React.Fragment key={pickNewsProps.key}>
          <PickNews {...pickNewsProps} />
          <HorizontalDivider thick />
        </React.Fragment>
      ))}
    </ColListLayout.Repeat>
  );
};

const PickNews: SFC<INews> = ({ link, title }) => {
  if (link === undefined) {
    return null;
  }

  return (
    <ColListLayout.Detail
      bottom="15px"
      items={[
        {
          el: <PickNewsThumbnail src={link.img} />,
          bottom: '15px',
        },
        {
          el: <PickNewsLink link={link.href} />,
          bottom: '5px',
        },
        {
          el: <PickNewsTitle>{title}</PickNewsTitle>,
          bottom: '5px',
        },
      ]}
    />
  );
};

const PickNewsThumbnail = styled.img`
  width: 100%;
`;

interface IPickNewsLinkProps {
  link: string;
}

const PickNewsLink: SFC<IPickNewsLinkProps> = ({ link }) => {
  const hostName = getHostName(link);

  return (
    <BothMarginWrapper style={{ fontFamily: 'SFProDisplay', fontSize: '12px', color: '#756e6e' }}>
      {hostName}
    </BothMarginWrapper>
  );
};

const PickNewsTitle = styled(BothMarginWrapper)`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;

export default PickNewsList;
