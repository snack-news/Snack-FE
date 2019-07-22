import React, { FunctionComponent } from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';

import { ColListLayout } from 'Layouts/index';
import { Link, LinkProps } from 'react-router-dom';

interface ITabLinkProps {
  to: LinkProps['to'];
}

const TabLinkLabel = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  color: ${({ selected }) => (selected ? '#0b66f7' : '#595966')};
`;

const TabLinkUnderLine = styled.div<{ selected?: boolean }>`
  display: flex;
  height: 1.5px;
  background-color: ${({ selected }) => (selected ? '#0b66f7' : '#e7e7e7')};
`;

const TabLink: FunctionComponent<ITabLinkProps> = ({ children, to }) => {
  const {
    location: { pathname },
  } = useReactRouter();
  const selected = pathname === to;

  return (
    <ColListLayout.Detail
      top="10px"
      items={[
        {
          el: (
            <Link to={to} style={{ textDecoration: 'none' }}>
              <TabLinkLabel selected={selected}>{children}</TabLinkLabel>
            </Link>
          ),
          bottom: '10px',
        },
        {
          el: <TabLinkUnderLine selected={selected} />,
        },
      ]}
    />
  );
};

export default TabLink;
