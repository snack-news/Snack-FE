# snack-fe

Snack News FE 코드입니다.

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