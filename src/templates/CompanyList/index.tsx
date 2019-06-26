import React from 'react';

import { ColListLayout } from 'Layouts/index';
import { getCompanyList } from 'Api/index';
import { HorizontalDivider } from 'Templates/index';

import CompanyItem from './CompanyItem';

/* CompanyList 컴포넌트 */
export const CompanyList = () => {
  const companyList = getCompanyList();

  return (
    <ColListLayout.Repeat>
      {companyList.map(company => (
        <ColListLayout.Repeat key={company.key}>
          <CompanyItem {...company} key="CompanyItem" />
          <HorizontalDivider key="HorizontalDivider" />
        </ColListLayout.Repeat>
      ))}
    </ColListLayout.Repeat>
  );
};
