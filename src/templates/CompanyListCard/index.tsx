import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { getCompanyList } from 'Api/index';

import { ColListLayout, RowListLayout, CardSimpleLayout, Center } from 'Layouts/index';

export interface ICompanyListCardProps {
  isRenderMoreLink?: boolean;
  title?: string;
}

const COMPANY_LIST_CARD_DEFAULT_PROPS = {
  isRenderMoreLink: false,
  title: '',
};

export const CompanyListCard: FunctionComponent<ICompanyListCardProps> = props => {
  const { title, isRenderMoreLink } = { ...COMPANY_LIST_CARD_DEFAULT_PROPS, ...props };
  const companyList = getCompanyList();

  return (
    <CardSimpleLayout>
      {{
        header: <CompanyListCardTitle>{title}</CompanyListCardTitle>,
        nav: isRenderMoreLink && <CompanyListCardMoreLink />,
        body: (
          <RowListLayout.Repeat interval="10px">
            {companyList.map(companyBoxProps => (
              <CompanyBox {...companyBoxProps} />
            ))}
          </RowListLayout.Repeat>
        ),
      }}
    </CardSimpleLayout>
  );
};

const CompanyListCardTitle = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

const CompanyListCardMoreLink = styled.div.attrs({ children: '모두보기' })`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  color: #0b66f7;
`;

const CompanyBox: FunctionComponent<ICompany> = ({ logoImg, companyName }) => (
  <CompanyBoxWrapper
    top="12px"
    bottom="8px"
    items={[
      {
        el: (
          <Center>
            <CompanyBoxDiv>
              <CompanyBoxLogo src={logoImg} />
            </CompanyBoxDiv>
          </Center>
        ),
        bottom: '12px',
      },
      {
        el: (
          <Center>
            <CompanyBoxLabel>{companyName}</CompanyBoxLabel>
          </Center>
        ),
      },
    ]}
  />
);

const CompanyBoxWrapper = styled(ColListLayout.Detail)`
  min-width: 89px;
  min-height: 74px;
  border-radius: 5px;
  border: solid 0.5px #d6d6db;
`;

const CompanyBoxDiv = styled.div`
  display: flex;
  max-width: 72px;
  max-height: 35px;
  min-height: 35px;
  align-items: center;
  justify-content: center;
`;
const CompanyBoxLogo = styled.img`
  width: 100%;
`;

const CompanyBoxLabel = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  color: #595966;
`;
