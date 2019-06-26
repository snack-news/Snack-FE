import React from 'react';

import { Header, HorizontalDivider, Footer } from 'Templates/index';
import { PageLayout } from 'Layouts/index';
import { News } from 'Components/News';

import linkMock from 'Resources/mock/linkMock.jpg';

// TODO news의 id값만 받고 캐싱된값을 쓰거나 없으면 loading 화면을 보여주며, API 요청을 통해 값을 가져오는 형태로 변경
export const NewsPage = () => (
  <PageLayout>
    {{
      header: (
        <React.Fragment>
          <Header title="기사보기" />
          <HorizontalDivider />
        </React.Fragment>
      ),
      body: (
        <News
          expanded
          isRenderHighlightTag
          {...{
            title: '애플 주가 7% 상승',
            content: `☀️ 삼성전자가 20여년 만에 디자인 철학을 재정립했습니다.

              📍  2월 25일 관련 업계에 따르면 삼성전자는 최근 ‘대담하라. 영혼과 교감하라(Be Bold. Resonate with Soul)’라는 문구를 새로운 전사 디자인 철학으로 내걸었습니다.
              
              📍 기존의 디자인 철학은 ‘사용자에서 출발해 내일을 담아내는 디자인(Inspired by Humans, Creating the Future)’이었는데요. 
              이 문구는 이건희 삼성전자 회장이 ‘디자인 혁명의 해’를 선언한 1996년부터 사용해온 디자인 철학이었습니다. 
              
              📍 당시 이건희 회장은 “디자인에는 상품의 겉모습을 꾸미고 치장하는 것에서 한 걸음 더 나아가 기업의 철학과 문화를 담아야 한다”며 직원들에게 디자인의 중요성을 강조한 바 있다고 합니다.
              
              📍 삼성전자가 23년만에 디자인 철학을 재정립한 것은 이미지 변신 때문인데요.
              밀레니얼 세대가 핵심 구매층으로 떠오른 요즘, 기술만으로는 이들을 만족시키기 어렵다는 판단에 기존의 기술기업이라는 이미지를 넘어 감성적 측면까지 고려하는 것 같습니다. 
              
              📍 삼성전자는 새로운 디자인 철학을 통해 사용자 중심의 과감한 디자인 혁신을 적극적으로 추진할 계획을 밝혔습니다.
              이번 4월에 이탈리아 밀라노에서 열릴 '밀라노 디자인 위크( Milano Design Week)'에서 새로운 디자인 철학을 선포하고 구체적인 포부를 발표할 예정이라고 하네요. `,
            tags: [
              { highlight: true, children: 'TOP3', key: '1' },
              { highlight: false, children: 'APPLE', key: '2' },
            ],
            link: {
              href:
                'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
              title: '애플 7% 주가 상승했나? 여력있어 보여',
              img: linkMock,
            },
            createdDate: 1561476141940,
            key: '1',
          }}
        />
      ),
      footer: <Footer />,
    }}
  </PageLayout>
);
