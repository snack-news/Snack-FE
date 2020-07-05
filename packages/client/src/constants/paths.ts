// TODO 디버깅 환경 개선 필요
// TODO NextJS 도입 고려

// TODO 이 상수값들 Routes 에 1:1 관계인데.. Route 로 옮기고 뭉쳐두어서 응집성을 높이는 방향으로 개선
// TODO 인터페이스를 정의해서 path 및 name을 필수 설정하도록 하면 더 좋을듯

export const HOME_PATH = '/';
export const HOME_NAME = '홈';

export const CORPS_PATH = '/corps';
export const CORPS_NAME = '토픽 모아보기';

export const ABOUT_PATH = '/about';
export const ABOUT_NAME = '서비스 안내';

export const PROPOSE_PATH = '/propose';
export const PROPOSE_NAME = '제안하기';

export const MENU_PATH = '/menu';
export const MENU_NAME = '메뉴';

export const ADD_SLACK_PATH = '/add-slack';
export const ADD_SLACK_NAME = 'Slack 구독';

export const ADDED_SLACK_PATH = '/api/slackbot/auth';

export const CORPS_NEWS_PATH = 'newslist/corp';
