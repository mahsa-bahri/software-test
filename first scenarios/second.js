const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options();
//options.addArguments("--ignore-local-proxy");

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

const URI = 'https://chatbot.theb.ai/#/chat';
driver.get(URI);
const search = driver.wait(until.elementLocated(By.className('n-input__textarea n-scrollbar')));
search.click();
const search2 = driver.wait(until.elementLocated(By.className('n-input__textarea-el')));
search2.sendKeys("give me gmail link");

const button = driver.wait(until.elementLocated(By.className('n-button n-button--primary-type n-button--medium-type')));
button.click();
//driver.wait(until.elementLocated(By.css());
const p =driver.wait(until.elementLocated(By.linkText("mail")));
p.click();
console.log("Page navigated: " + driver.getTitle());
