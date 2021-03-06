import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from '~src/view/components/Link';

interface IContactProps {
  to: string;
  icon: string;
}

export const Contact: FC<IContactProps> = ({ to, icon }) => (
  <Link to={to}>
    <ContactIcon src={icon} />
  </Link>
);

const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
`;
