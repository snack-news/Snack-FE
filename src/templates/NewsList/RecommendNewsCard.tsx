import React, { SFC } from 'react';
import styled from 'styled-components';

import { ColListLayout, RowListLayout } from 'Layouts/index';
import { getRecommendNewsList } from 'Api/index';

import CardSimpleLayout from './CardSimpleLayout';

const RecommendNewsCard = () => {
  const recommendNewsList = getRecommendNewsList();

  return (
    <CardSimpleLayout>
      {{
        header: <RecommendNewsCardTitle />,
        body: (
          <ColListLayout.Repeat interval="15px">
            {recommendNewsList.map(recommendNewsProps => (
              <RecommendNews {...recommendNewsProps} />
            ))}
          </ColListLayout.Repeat>
        ),
      }}
    </CardSimpleLayout>
  );
};

const RecommendNewsCardTitle = styled.div.attrs({
  children: '커머스, 이런 기사도 읽어보세요.',
})`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 500;
  color: #121111;
`;

const RecommendNews: SFC<INews> = ({ title, link }) => {
  if (link === undefined) {
    return null;
  }

  return (
    <RowListLayout.Repeat interval="10px">
      <RecommendNewsThumbnail src={link.img} />
      <RecommendNewsTitle>{title}</RecommendNewsTitle>
    </RowListLayout.Repeat>
  );
};

const RecommendNewsThumbnail = styled.img`
  width: 60px;
  height: 60px;
`;

const RecommendNewsTitle = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 1.25;
  color: #121111;
`;

export default RecommendNewsCard;
