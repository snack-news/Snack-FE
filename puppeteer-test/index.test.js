const puppeteer = require('puppeteer');
const config = require('./config');

const iPhone = puppeteer.devices[config.device];

let browser;
let page;

beforeAll(async done => {
  browser = await puppeteer.launch();
  page = await browser.newPage();

  await page.emulate(iPhone);

  done();
});

afterAll(() => {
  browser.close();
});

config.ids.forEach(id => {
  it(`id: ${id}`, async () => {
    await page.goto(`http://localhost:${config.port}/iframe.html?id=${id}`);

    const screenshot = await page.screenshot();
    // browser.close();

    expect(screenshot).toMatchImageSnapshot();
  });
});
