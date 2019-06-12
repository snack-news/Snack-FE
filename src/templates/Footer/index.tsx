import React from 'react';
import styled from 'styled-components';

import ColumnLayout from '../../layouts/ColumnLayout';

import FooterLinkList from './components/FooterLinkList';
import SocialList from './components/SocialList';
import Copyright from './components/Copyright';

const ColumnLayoutWrapper = styled(ColumnLayout)`
  box-shadow: 0 -1px 3px 0 rgba(11, 102, 247, 0.4);
  background-color: #0b66f7;
`;

const Footer = () => (
  <ColumnLayoutWrapper
    paddingTop="40px"
    items={[
      {
        el: <FooterLinkList />,
        paddingBottom: '29px',
        key: 'FooterLinkList',
      },
      {
        el: <SocialList />,
        paddingBottom: '42px',
        key: 'SocialList',
      },
      {
        el: <Copyright />,
        paddingBottom: '32px',
        key: 'Copyright',
      },
    ]}
  />
);

export default Footer;
