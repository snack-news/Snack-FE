import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, Center, RowListLayout } from 'Layouts/index';

import { arrowLinkImg } from 'Resources/index';

/* CompanyItem 컴포넌트 */
const CompanyItem: FunctionComponent<ICompany> = ({ companyName, logoImg }) => (
  <CompanyItemLayout>
    {{
      companyIcon: <CompanyIcon src={logoImg === null ? '' : logoImg} />,
      companyLabel: <CompanyLabel>{companyName}</CompanyLabel>,
      arrowIcon: <ArrowIcon />,
    }}
  </CompanyItemLayout>
);

export default CompanyItem;

/* CompanyItemLayout 컴포넌트 */
interface ICompanyItemLayoutProps {
  children: {
    companyIcon: ReactElement;
    companyLabel: ReactElement;
    arrowIcon: ReactElement;
  };
}

const CompanyItemLayout: FunctionComponent<ICompanyItemLayoutProps> = ({
  children: { companyIcon, companyLabel, arrowIcon },
}) => (
  <CompanyItemLayoutWrapper>
    <RowListLayout.Detail
      items={[
        {
          el: companyIcon,
          right: '10px',
        },
        {
          el: companyLabel,
          right: 'auto',
        },
        {
          el: arrowIcon,
        },
      ]}
    />
  </CompanyItemLayoutWrapper>
);

/* CompanyItemLayoutWrapper 컴포넌트 */
const CompanyItemLayoutWrapper = styled(BothMarginWrapper)`
  padding-top: 12px;
  padding-bottom: 12px;
`;

/* CompanyIcon 컴포넌트 */
interface ICompanyIconProps {
  src: string;
}

const CompanyIcon: FunctionComponent<ICompanyIconProps> = ({ src }) => (
  <CompanyIconWrapper>
    <CompanyIconImg src={src} />
  </CompanyIconWrapper>
);

/* CompanyIconWrapper 컴포넌트 */
const ICON_WRAPPER_SIZE = '36px';
const ICON_MAX_SIZE = '24px';

const CompanyIconWrapper = styled(Center)`
  width: ${ICON_WRAPPER_SIZE};
  height: ${ICON_WRAPPER_SIZE};

  border: solid 1px #ececec;
  background-color: #fefefe;
  border-radius: 1000px;
  font-size: 10px;
`;

/* CompanyIconImg 컴포넌트 */
const CompanyIconImg = styled.img`
  max-width: ${ICON_MAX_SIZE};
  max-height: ${ICON_MAX_SIZE};
`;

/* CompanyLabel 컴포넌트 */
const CompanyLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;

/* ArrowIcon 컴포넌트 */
const ArrowIcon = styled.img.attrs({ src: arrowLinkImg })`
  height: 14px;
`;
