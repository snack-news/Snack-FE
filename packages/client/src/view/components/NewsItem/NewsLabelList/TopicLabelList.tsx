import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NewsLabel } from './NewsLabel';

import { CORPS_NEWS_PATH } from '~src/constants/paths';

interface IProps {
  topics: ITopic[];
}

export const TopicLabelList: FC<IProps> = ({ topics }) => (
  <>
    {topics.map(topic => (
      <LinkWrap to={`${CORPS_NEWS_PATH}/${topic.id}`} key={topic.id}>
        <NewsLabel>{topic.name}</NewsLabel>
      </LinkWrap>
    ))}
  </>
);

const LinkWrap = styled(Link)``;
