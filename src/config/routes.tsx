const createDefaultRoute = (path: string) => ({
  path,
  getLink: () => path,
});

export const routes = {
  homePage: createDefaultRoute('/'),
  newsPage: {
    path: '/news/:newsId',
  },
  companyNewsListPage: createDefaultRoute('/company-list/'),
  companySelectPage: createDefaultRoute('/company-select/'),
  introduceFormPage: createDefaultRoute('/introduce-from/'),
  menuPage: createDefaultRoute('/menu/'),
  picksPage: createDefaultRoute('/picks/'),
  aboutPage: createDefaultRoute('/about/'),
};
