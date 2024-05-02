const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options();
//options.addArguments("--ignore-local-proxy");

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

const URI = 'https://www.google.com/';
driver.get(URI);

const search = driver.wait(until.elementLocated(By.id('APjFqb')));
search.click();
search.sendKeys('jennifer aniston');
const search2 = driver.wait(until.elementLocated(By.id('jZ2SBf')));
search2.click();
//search2.sendKeys(Key.ENTER);
const v =driver.wait(until.elementLocated(By.className('PZPZlf FQ7nIf nZWEZc IVVAzc ojFefc Si5xMe'))).click();
const s=driver.wait(until.elementLocated(By.className('VDgVie k0Jjg fCrZyc NQYJvc zqrO0 sLl7de OJeuxf'))).click();