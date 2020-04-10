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
async function example1() {
    let text1 = await driver.wait(until.elementLocated(By.id('username')), 300000);
    await text1.sendKeys('Yourusername');
    let text2 = await driver.wait(until.elementLocated(By.id('password')), 300000);
    await text2.sendKeys('Yourpassword');
    setTimeout(function () { 
        driver.findElement(By.id('login-submit')).click();
    }, 3000);
}
example1();
async function example2() {
    let button = await driver.wait(until.elementLocated(By.xpath('//*[@id="form1"]/div[7]/ul/li[2]/a')), 300000);
    await button.click();
}
example2();
async function example3() {
    let button = await driver.wait(until.elementLocated(By.id('p1_ChengNuo-inputEl-icon')), 300000);
    await button.click();
    let text = await driver.wait(until.elementLocated(By.id('p1_TiWen-inputEl')), 300000);
    await text.sendKeys('36.8');
    setTimeout(function () { 
        driver.findElement(By.id('p1_ctl00_btnSubmit')).click();
    }, 3000);
}
example3();
async function example4() {
    let button = await driver.wait(until.elementLocated(By.id('fineui_24')), 30000);
    await button.click();
}
example4();
async function example5() {
    let button = await driver.wait(until.elementLocated(By.id('fineui_29')), 30000);
    await button.click();
    setTimeout(function () { 
        driver.quit();
    }, 3000);
}
example5();
