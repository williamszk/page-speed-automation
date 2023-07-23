const { By, Builder } = require('selenium-webdriver');
require('chromedriver');
let chrome = require('selenium-webdriver/chrome');
const utils = require('./utils.js');

const prepareDriver = async (site) => {
	// var searchString = "Automation testing with Selenium and JavaScript";
	// const site = 'https://pagespeed.web.dev/';

	let options = new chrome.Options();
	options.addArguments('--incognito');
	options.addArguments('--headless');

	// To wait for browser to build and launch properly
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(options)
		.build();

	// wait for the page to load
	await driver.get(site);
	// maximize window
	driver.manage().window().maximize();

	return driver;
};

const analyzeUrl = async (driver, urlToAnalyze) => {
	// find the place to write the url we want to search
	let myNodes = await driver.findElements(
		By.xpath("//input[@placeholder='Enter a web page URL']")
	);

	// type the url and wait 2s
	await utils.typeStringIntoInput(myNodes[0], urlToAnalyze, 2000);

	// find the button to click
	myNodes = await driver.findElements(By.xpath("//span[text()='Analyze']"));
	await myNodes[0].click();
	await utils.sleep(10000, 'waiting for app to analyze URL');
};

module.exports = {
	prepareDriver,
	analyzeUrl,
};
