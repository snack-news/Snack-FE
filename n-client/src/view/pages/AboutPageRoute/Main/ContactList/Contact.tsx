import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

interface IProps {
  to: string;
  icon: string;
}

export const Contact: FC<IProps> = ({ to, icon }) => (
  <Link to={to}>
    <ContactIcon src={icon} />
  </Link>
);

const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
`;
