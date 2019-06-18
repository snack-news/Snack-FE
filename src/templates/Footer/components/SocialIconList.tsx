import React from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

import { footerSocialList } from 'Constants';

/* SocialIconList 컴포넌트 */
export const SocialIconList = () => (
  <RowListLayout.Between>
    {footerSocialList.map(({ img, link }) => (
      <a href={link}>
        <SocialIcon src={img} />
      </a>
    ))}
  </RowListLayout.Between>
);

/* SocialIcon 컴포넌트 */
const SocialIcon = styled.img``;

export default SocialIconList;
