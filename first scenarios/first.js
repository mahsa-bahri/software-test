// const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
// const { Driver } = require('selenium-webdriver/chrome');

// (async () => {
//   let driver = await new Builder().forBrowser('chrome').build();
//   const URI = 'https://www.digikala.com/';
//   await driver.get(URI);

//   await driver.wait(until.elementLocated(By.className('w-100 d-inline-block ls-is-cached lazyloaded'))).click();

//   //const footerLink = await driver.findElement(By.className('px-2 TextField_TextField__input__hFMFl text-subtitle w-100 TextField_TextField__bwN9_ TextField_TextField--primary__IZ6Ku color-500 text-body-2 text-body-2'));
//   //footerLink.click();
//   //footerLink.sendKeys("گوشی موبایل");
// })();
const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments("--ignore-local-proxy");

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

const URI = 'https://www.digikala.com/';
driver.get(URI);
const search = driver.wait(until.elementLocated(By.className('grow-1 px-2 px-4-lg ellipsis')));
search.click();
const search2 = driver.wait(until.elementLocated(By.className('px-2 TextField_TextField__input__hFMFl text-subtitle w-100 TextField_TextField__bwN9_ TextField_TextField--primary__IZ6Ku color-500 text-body-2 text-body-2')));
search2.sendKeys('گوشی موبایل');
const fisrtOption = driver.wait(until.elementLocated(By.className('text-body-2 color-700 grow-1 ellipsis-2')));
fisrtOption.click();
//const add=driver.wait(until.elementLocated(By.className('d-flex ai-center jc-center relative grow-1')));
//add.click();
//const canel=driver.wait(until.elementLocated(By.xpath("//*[name()='use' and @*='#close']"))).click();
const q = driver.wait(until.elementLocated(By.className('text-body-2 color-secondary-500'))).click();
const home = driver.wait(until.elementLocated(By.className('w-100 d-inline-block ls-is-cached lazyloaded')));
home.click();
