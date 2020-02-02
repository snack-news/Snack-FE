**REAL: https://snak.news/**

# snack-fe 
Snak News FE 코드입니다.

[![Build Status](https://travis-ci.org/snack-news/Snack-FE.svg?branch=master)](https://travis-ci.org/snack-news/Snack-FE)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8cb79631f47a47f48e85081d59fef73f)](https://www.codacy.com/manual/vomvoru/Snack-FE?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=snack-news/Snack-FE&amp;utm_campaign=Badge_Grade)

## branch
- master: release branch
- dev: dev branch

## How to Build & Run
```shell
./install.sh
./build.sh
./start.sh # 포트번호가 출력됩니다.
# open http://localhost:포트번호/
```

# Todo
- lerna 도입 고려
- 서버 랜더링 일부 버그 수정후 재적용
  - 서버 랜더링시 비동기적으로 가져오는 데이터를 서버랜더링 하지 못하는 이슈
- 기사 목록 중간마다 주차 표시
- 특정 조건에서 뉴스 중간중간 나오는 컴포넌트들이 안나오는 버그
  - isRenderCorpList, isRenderLinkListItem, isRenderPlatformLinkListItem 작동 버그 수정
- dotenv 적용
- 빌드시 eslint, tsc 검사
- service woker 캐싱 적용
- node server 성능 최적화
- Sentry 추가