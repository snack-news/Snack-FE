// TODO 구현 필요

import React, { FC } from 'react';

import { ContactFrom } from './ContactFrom';
import { PageDesc } from './PageDesc';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {}

export const ContactPageMain: FC<Props> = () => (
  <>
    <PageDesc>Snack에 소개하고 싶은 소식이나 링크를 알려주세요!</PageDesc>
    <HorizontalDivider thick />
    <ContactFrom />
  </>
);
