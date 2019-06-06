import React, { SFC } from 'react';
import styled from 'styled-components';

interface TabProps {
  selected?: boolean;
}

const TabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabLabel = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-family: SFProDisplay;
  font-size: 16px;
  font-weight: 600;
  color: #595966;
`;

const TabUnderLine = styled.div`
  display: flex;
  height: 1.5px;
  background-color: #0b66f7;
`;

const Tab: SFC<TabProps> = ({ children, selected }) => (
  <TabWrapper>
    <TabLabel
      style={{
        color: selected ? '#0b66f7' : undefined,
      }}
    >
      {children}
    </TabLabel>
    {selected ? <TabUnderLine /> : null}
  </TabWrapper>
);

export default Tab;
