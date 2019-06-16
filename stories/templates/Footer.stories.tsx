import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';

import Outline from '../Outline';

import Footer, { Copyright, FooterLinkList, SocialIconList } from '../../src/templates/Footer';

storiesOfWithTemplates('Footer', module)
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
  .add('SocialIconList', () => (
    <Outline>
      <SocialIconList />
    </Outline>
  ));
