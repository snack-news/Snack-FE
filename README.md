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
    
