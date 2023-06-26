// use selenium to enter into page-speed

// https://pagespeed.web.dev/

const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');
let chrome = require('selenium-webdriver/chrome');

const coreWebVitalsAssessment = require('./coreWebVitalsAssessment.js');
const firstBlockOfData = require('./firstBlockOfData.js');
const secondBlockOfData = require('./secondBlockOfData.js');
const utils = require('./utils.js');

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

async function main() {
	// var searchString = "Automation testing with Selenium and JavaScript";
	const site = 'https://pagespeed.web.dev/';

	let options = new chrome.Options();
	options.addArguments('--incognito');

	// To wait for browser to build and launch properly
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(options)
		.build();

	// wait for the page to load
	await driver.get(site);
	// maximize window
	driver.manage().window().maximize();

	// find the place to write the url we want to search
	let myNodes = await driver.findElements(
		By.xpath("//input[@placeholder='Enter a web page URL']")
	);

	// type the url and wait 2s
	await utils.typeStringIntoInput(
		myNodes[0],
		'https://www.medcel.com.br/',
		2000
	);

	// find the button to click
	myNodes = await driver.findElements(By.xpath("//span[text()='Analyze']"));
	await myNodes[0].click();
	await utils.sleep(10000, 'waiting for app to analyze URL');

	let gatherStats = {};
	gatherStats.mobile = {};

	// get data from Core Web Vital Assessment (it is just Failed or Success) ====
	const theText = await coreWebVitalsAssessment.collect(driver);
	gatherStats.mobile.coreWebVitalsAssessment = theText;

	// get data from the first block =============================================
	let statsFirstBlock = await firstBlockOfData.collect(driver);
	gatherStats.mobile.statsFirstBlock = statsFirstBlock;

	// get data from the second block =============================================
	let statsSecondBlock = await secondBlockOfData.collect(driver);
	gatherStats.mobile.statsSecondBlock = statsSecondBlock;

	console.log(gatherStats);
	await utils.sleep(120000, 'ran after 120 second passed');
	await driver.quit();
}

main();
