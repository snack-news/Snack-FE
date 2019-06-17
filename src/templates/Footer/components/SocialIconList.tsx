import React from 'react';
import styled from 'styled-components';

import RowListLayout from '../../../layouts/RowListLayout';

import { socialList } from '../../../constants';

/* SocialIconList 컴포넌트 */
export const SocialIconList = () => (
  <RowListLayout.Between>
    {socialList.map(socialIconProps => (
      <SocialIcon {...socialIconProps} />
    ))}
  </RowListLayout.Between>
);

/* SocialIcon 컴포넌트 */
const SocialIcon = styled.img``;

export default SocialIconList;
