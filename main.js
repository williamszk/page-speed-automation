// use selenium to enter into page-speed

// https://pagespeed.web.dev/

const { By } = require('selenium-webdriver');
const coreWebVitalsAssessment = require('./coreWebVitalsAssessment.js');
const firstBlockOfData = require('./firstBlockOfData.js');
const secondBlockOfData = require('./secondBlockOfData.js');
const utils = require('./utils.js');
const pagespeedFunctions = require('./pagespeedFunctions.js');

const main = async () => {
	const site = 'https://pagespeed.web.dev/';
	let driver = await pagespeedFunctions.prepareDriver(site);
	const urlToAnalyze = 'https://www.medcel.com.br/';
	await pagespeedFunctions.analyzeUrl(driver, urlToAnalyze);

	let gatherStats = {};
	gatherStats.mobile = {};
	gatherStats.desktop = {};

	// =============== Mobile ===================================================

	// get data from Core Web Vital Assessment (the data from this one is just Failed or Success)
	const theText = await coreWebVitalsAssessment.collect(driver, 'mobile');
	gatherStats.mobile.coreWebVitalsAssessment = theText;

	// get data from the first block -------------------------------------------
	let statsFirstBlock = await firstBlockOfData.collect(driver, 'mobile');
	gatherStats.mobile.statsFirstBlock = statsFirstBlock;

	// get data from the second block ------------------------------------------
	let statsSecondBlock = await secondBlockOfData.collect(driver, 'mobile');
	gatherStats.mobile.statsSecondBlock = statsSecondBlock;

	// =============== Desktop ==================================================
	await utils.sleep(2000, 'waiting to start Desktop data collection');

	// change to desktop
	let myNode2 = await driver.findElement(
		By.xpath("//button[@id='desktop_tab']")
	);
	await myNode2.click();

	await utils.sleep(10000, 'waiting to analyze Desktop');
	driver.executeScript('window.scrollBy(0, -500);');
	await utils.sleep(20000, 'waiting to load the second block...');

	// get data from Core Web Vital Assessment (the data from this one is just Failed or Success)
	const theText2 = await coreWebVitalsAssessment.collect(driver, 'desktop');
	gatherStats.desktop.coreWebVitalsAssessment = theText2;

	// get data from the first block -------------------------------------------
	let statsFirstBlock2 = await firstBlockOfData.collect(driver, 'desktop');
	gatherStats.desktop.statsFirstBlock = statsFirstBlock2;

	// get data from the second block ------------------------------------------
	let statsSecondBlock2 = await secondBlockOfData.collect(driver, 'desktop');
	gatherStats.desktop.statsSecondBlock = statsSecondBlock2;

	// =============== End ==================================================
	console.log(gatherStats);
	await utils.sleep(1200000, 'waiting to get the data');
	await driver.quit();
};

main();
