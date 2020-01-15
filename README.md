## branch
- **new: refactoring brnach (대체 예정)**
- master: release branch
- dev: dev branch

# snack-fe 

Snack News FE 코드입니다.

[![Build Status](https://travis-ci.org/snack-news/Snack-FE.svg?branch=master)](https://travis-ci.org/snack-news/Snack-FE)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8cb79631f47a47f48e85081d59fef73f)](https://www.codacy.com/manual/vomvoru/Snack-FE?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=snack-news/Snack-FE&amp;utm_campaign=Badge_Grade)

## How to Build & Run
```
npm install
npm run build
npm run server
```

## .env

## 마크업 개발환경
1. `npm i -g nps`

2. 터미널 4개 띄우고 아래 명령어 각각 실행

```
# eslint 실행
nps eslint.watch

# typescript type check 실행 (babel로 돌리므로 빌드시 타입 체크를 하지 않음)
# 장점: 빌드 속도 향상, 빌드 로그와 type check에 대한 로그 결과가 섞이지 않음
nps typecheck.watch

# storybook 실행
nps storybook

# test 실행 (스크린샷을 찍기때문에 storybook이 실행 완료되고 실행되어야 합니다)
nps test
```

3. http://localhost:8899 로 스토리북 화면을 확인하며 Happy Coding!

# 구조
- services
  - newsService: News API Wrapping Interface
    - api: News API Origin Interface
    

# Todo
- lerna 도입 고려
- 서버 랜더링 일부 버그 수정후 재적용
  - 서버 랜더링시 비동기적으로 가져오는 데이터를 서버랜더링 하지 못하는 이슈
  - 전반적인 검토 필요 (styled 서버랜더링이 잘 안되고 있다는 로그 출력에 대한 이슈)
- 기사 목록 중간마다 주차 표시
- 특정 조건에서 뉴스 중간중간 나오는 컴포넌트들이 안나오는 버그
  - isRenderCorpList, isRenderLinkListItem, isRenderPlatformLinkListItem 작동 버그 수정
- dotenv 적용
- 빌드시 eslint, tsc 검사
- service woker 캐싱 적용
- node server 성능 최적화