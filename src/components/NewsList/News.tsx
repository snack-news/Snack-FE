import React, { SFC } from 'react';
import styled from 'styled-components';
import psl from 'psl';
import HorizontalDivider from '../HorizontalDivider';

import shareImg from '../../resources/icon/share.png';
import copyImg from '../../resources/icon/copy.png';

interface Link {
  href: string;
  title: string;
  img?: string;
}

interface NewsProps {
  tags: TagProps[];
  link?: Link;
}

interface TagsProps {
  tags: NewsProps['tags'];
}

interface TagProps {
  highlight?: boolean;
}

const Wrapper = styled.div`
  padding-top: 5px;
`;

const Header = styled.div`
  padding: 25px 20px;
`;

const Tag = styled.div<TagProps>`
  display: inline-block;
  font-family: SFProDisplay;
  font-size: 11px;
  font-weight: 500;
  color: #fefefe;
  padding: 3px 8px;
  margin-right: 8px;

  background-color: ${({ highlight }) => (highlight ? '#dd2020' : '#6d6f72')};
`;

const Tags: SFC<TagsProps> = ({ tags }) => (
  <div>
    {tags.map(tagProps => (
      <Tag {...tagProps} />
    ))}
  </div>
);

const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 19px;
  font-weight: 600;
  color: #121111;
  padding: 10px 0px;
`;

const Contents = styled.div`
  width: 305px;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  line-height: 1.43;
  color: #121111;

  display: inline-block;
  display: -webkit-box;

  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MoreButton = styled.div.attrs({ children: '더보기' })`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 2.4;
  color: #b6b6c0;
`;

const LinkImg = styled.img`
  width: 100%;
`;

const ExternalLinkWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 15px 20px;
`;

const LinkHrefWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  color: #756e6e;
`;

const LinkTitleWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;

const extractHostname = (url: string) => {
  let hostname: string;
  // find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf('//') > -1) {
    [, , hostname] = url.split('/');
  } else {
    [hostname] = url.split('/');
  }

  // find & remove port number
  [hostname] = hostname.split(':');
  // find & remove "?"
  [hostname] = hostname.split('?');

  return hostname;
};

const ExternalLink: SFC<Pick<Link, 'href' | 'title'>> = ({ href, title }) => {
  return (
    <ExternalLinkWrapper>
      <LinkHrefWrapper>{psl.get(extractHostname(href))}</LinkHrefWrapper>
      <div style={{ height: '5px' }} />
      <LinkTitleWrapper>{title}</LinkTitleWrapper>
    </ExternalLinkWrapper>
  );
};

const Footer = styled.div`
  margin: 12px 50px 22px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface IconLabelProps {
  iconImg: string;
  label: string;
}

const IconLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconLabelImg = styled.img`
  width: 23px;
`;

const IconLabelText = styled.span`
  font-family: SFProText;
  font-size: 13px;
  color: #595966;
  padding: 0 3px;
`;

const IconLabel: SFC<IconLabelProps> = ({ iconImg, label }) => (
  <IconLabelWrapper>
    <IconLabelImg src={iconImg} alt="icon" />
    <IconLabelText>{label}</IconLabelText>
  </IconLabelWrapper>
);

const News: SFC<NewsProps> = ({ tags, link }) => (
  <Wrapper>
    <Header>
      <Tags tags={tags} />
      <Title>애플 7% 주가 상승</Title>
      <Contents>
        보고서에 따르면 월 별 숙박 예약 비중은 8월이 연간 예약량의 약 11.3%를 차지, 전통적인
        여름여름여름여름여름여름여름여름여름여름여름여름.
        여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름.
        여름여름여름여름여름여름여름여여름.
        여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름
      </Contents>
      <MoreButton />
    </Header>
    {link && link.img && <LinkImg src={link.img} />}
    {link && <ExternalLink {...link} />}
    <HorizontalDivider small style={{ marginTop: '10px', marginBottom: '10px' }} />
    <Footer>
      <IconLabel iconImg={shareImg} label="공유하기" />
      <IconLabel iconImg={copyImg} label="공유하기" />
    </Footer>
    <HorizontalDivider />
  </Wrapper>
);

export default News;
