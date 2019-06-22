const puppeteer = require('puppeteer');
const config = require('./config');

const iPhone = puppeteer.devices[config.device];

let browser;
let page;

const add = (section, baseFileName) => storyName => {
  const id = `${section}-${baseFileName}--${storyName}`.toLowerCase();
  const testName = `${baseFileName}.${storyName}`;

  test(testName, async () => {
    await page.goto(`http://localhost:${config.port}/iframe.html?id=${id}`);

    const screenshot = await page.screenshot({ fullPage: true });
    // browser.close();

    expect(screenshot).toMatchImageSnapshot();
  });

  return { add: add(section, baseFileName) };
};

const storiesReq = require.context('../stories', true, /\.stories\.tsx?$/);
storiesReq.keys().forEach(filePath => {
  const paths = filePath.split('/');
  const section = paths[1];
  const fileName = paths[paths.length - 1];
  const baseFileName = fileName.split('.')[0];

  describe(`screenshot ${section}`, () => {
    storiesReq(filePath).default({ add: add(section, baseFileName) });
  });
});

beforeAll(async done => {
  browser = await puppeteer.launch();
  page = await browser.newPage();

  await page.emulate(iPhone);

  done();
});

afterAll(() => {
  browser.close();
});
