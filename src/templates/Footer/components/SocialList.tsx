import React from 'react';
import styled from 'styled-components';

import constants from '../../../constants';

const SocialListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SocialIcon = styled.img``;

const SocialList = () => (
  <SocialListWrapper>
    {constants.socialList.map(socialIconProps => (
      <SocialIcon {...socialIconProps} />
    ))}
  </SocialListWrapper>
);

export default SocialList;
