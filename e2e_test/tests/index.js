const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/');
        // 找到搜索框，输入adaf，按enter
        await driver.findElement(By.name('wd')).sendKeys('adaf', Key.RETURN);
        await driver.wait(until.titleIs('adaf_百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();