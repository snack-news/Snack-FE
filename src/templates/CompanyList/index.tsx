import React from 'react';

import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider } from 'Templates/index';

import useCorpList from 'Hooks/useCorpList';
import CompanyItem from './CompanyItem';

/* CompanyList 컴포넌트 */
export const CompanyList = () => {
  const [companyListState] = useCorpList();

  if (companyListState.status !== 'success') {
    return null;
  }

  return (
    <ColListLayout.Repeat>
      {companyListState.corpList.map(corp => (
        <ColListLayout.Repeat key={corp.id}>
          <CompanyItem companyName={corp.name} logoImg={corp.image} key={`${corp.id}`} />
          <HorizontalDivider key="HorizontalDivider" />
        </ColListLayout.Repeat>
      ))}
    </ColListLayout.Repeat>
  );
};
