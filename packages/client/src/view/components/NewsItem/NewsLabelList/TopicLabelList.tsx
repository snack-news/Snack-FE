import React, { FC } from 'react';

import styled from 'styled-components';

import { NewsLabel } from './NewsLabel';

import { CORPS_NEWS_PATH } from '~src/constants/paths';
import { useCorps } from '~src/hooks/useCorps';
import { Link } from '~src/view/components/Link';
import { BRIGHT_BLUE } from '~src/constants/colors';

interface IProps {
  topics: ITopic[];
}

export const TopicLabelList: FC<IProps> = ({ topics }) => {
  const corps = useCorps();

  return (
    <>
      {topics.map(topic => {
        if (corps?.some(({ id }) => id === topic.id)) {
          return (
            <LinkWrap to={`/${CORPS_NEWS_PATH}/${topic.id}`} key={topic.id}>
              <NewsLabel style={{ background: BRIGHT_BLUE }}>{topic.name}</NewsLabel>
            </LinkWrap>
          );
        }

        return <NewsLabel key={topic.id}>{topic.name}</NewsLabel>;
      })}
    </>
  );
};

const LinkWrap = styled(Link)`
  text-decoration: none;
`;
