const createDefaultRoute = (path: string) => ({
  path,
  getLink: () => path,
});

export const routes = {
  homePage: createDefaultRoute('/'),
  newsListPage: {
    path: '/newsList/:year/:month/week/:week',
  },
  newsPage: {
    path: '/news/:newsId',
  },
  companyNewsListPage: {
    path: '/company-list/:corpId',
  },
  companySelectPage: createDefaultRoute('/company-select/'),
  introduceFormPage: createDefaultRoute('/introduce-from/'),
  menuPage: createDefaultRoute('/menu/'),
  picksPage: createDefaultRoute('/picks/'),
  aboutPage: createDefaultRoute('/about/'),
};
