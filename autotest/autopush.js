const webdriver = require("selenium-webdriver");
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
const { By, until } = require("selenium-webdriver");

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
driver.get('http://selfreport.shu.edu.cn/DayReport.aspx');
driver.findElement(By.id('username')).sendKeys('Yourusername');
driver.findElement(By.id('password')).sendKeys('Yourpassword');
setTimeout(function () { 
    driver.findElement(By.id('login-submit')).click();
}, 10000);
async function example1() {
    let button = await driver.wait(until.elementLocated(By.xpath('//*[@id="form1"]/div[7]/ul/li[2]/a')), 300000);
    await button.click();
}
example1();
async function example2() {
    let button = await driver.wait(until.elementLocated(By.id('p1_ChengNuo-inputEl-icon')), 300000);
    await button.click();
    setTimeout(function () { 
        driver.findElement(By.id('p1_TiWen-inputEl')).sendKeys('36.8');
    }, 3000);
    setTimeout(function () { 
        driver.findElement(By.id('p1_ctl00_btnSubmit')).click();
    }, 5000);
}
example2();
async function example5() {
    let button = await driver.wait(until.elementLocated(By.id('fineui_20')), 30000);
    await button.click();
}
example5();
async function example6() {
    let button = await driver.wait(until.elementLocated(By.id('fineui_25')), 30000);
    await button.click();
    setTimeout(function () { 
        driver.quit();
    }, 3000);
}
example6();
