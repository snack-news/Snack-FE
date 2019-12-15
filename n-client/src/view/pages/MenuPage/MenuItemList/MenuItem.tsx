import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { dark } from '~nclient/view/atoms/styles/colors';

export const MenuItem = styled(Link)`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  text-decoration: none;
  color: ${dark};

  font-family: 'Noto Sans KR', sans-serif;
`;
