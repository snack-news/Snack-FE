import React from 'react';
import styled from 'styled-components';

import { ColListLayout, RowListLayout, CardSimpleLayout } from 'Layouts/index';
import { getRecommendNewsList } from 'Api/index';

export const RecommendNewsList = () => {
  const recommendNewsList = getRecommendNewsList();

  return (
    <CardSimpleLayout>
      {{
        header: <RecommendNewsListTitle />,
        body: (
          <ColListLayout.Repeat interval="15px">
            {recommendNewsList.map(({ link, title, key }) => (
              <RowListLayout.Repeat interval="10px" key={key}>
                <RecommendNewsThumbnail src={link.img} />
                <RecommendNewsTitle>{title}</RecommendNewsTitle>
              </RowListLayout.Repeat>
            ))}
          </ColListLayout.Repeat>
        ),
      }}
    </CardSimpleLayout>
  );
};

const RecommendNewsListTitle = styled.div.attrs({
  children: '커머스, 이런 기사도 읽어보세요.',
})`
  font-size: 17px;
  font-weight: 500;
  color: #121111;
`;

const RecommendNewsThumbnail = styled.img`
  width: 60px;
  height: 60px;
`;

const RecommendNewsTitle = styled.div`
  font-size: 16px;
  line-height: 1.25;
  color: #121111;
`;
