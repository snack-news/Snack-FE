import React from 'react';

import storiesOfWithTemplate from './storiesOfWithTemplate';

import Outline from '../Outline';

import Footer from '../../src/templates/Footer';
import Copyright from '../../src/templates/Footer/components/Copyright';
import FooterLinkList from '../../src/templates/Footer/components/FooterLinkList';
import SocialList from '../../src/templates/Footer/components/SocialList';

storiesOfWithTemplate('Footer', module)
  .add('기본', () => <Footer />)
  .add('Copyright', () => (
    <Outline>
      <Copyright />
    </Outline>
  ))
  .add('FooterLinkList', () => (
    <Outline>
      <FooterLinkList />
    </Outline>
  ))
  .add('SocialList', () => (
    <Outline>
      <SocialList />
    </Outline>
  ));
