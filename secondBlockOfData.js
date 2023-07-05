const { setDefaultService } = require('selenium-webdriver/chrome.js');
const utils = require('./utils.js');

const { By } = require('selenium-webdriver');

const collect = async (driver) => {
	// scroll down the window
	driver.executeScript('window.scrollBy(0, 500);');
	await utils.sleep(20000, 'waiting to load the second block...');

	let gatherStats = {};
	// collect data
	gatherStats.performance = await helperFindNodeWithStats(
		driver,
		'#performance'
	);
	gatherStats.accessibility = await helperFindNodeWithStats(
		driver,
		'#accessibility'
	);
	gatherStats.bestPractices = await helperFindNodeWithStats(
		driver,
		'#best-practices'
	);
	gatherStats.seo = await helperFindNodeWithStats(driver, '#seo');

	return gatherStats;
};

const helperFindNodeWithStats = async (driver, searchingText) => {
	let myNodes = await driver.findElements(
		By.xpath(`//a[@href='${searchingText}']`)
	);

	let theText00 = await myNodes[1].getText();
	let theTextArray00 = await theText00.split('\n');
	let theText = await theTextArray00[0];

	return theText;
};

module.exports = {
	collect,
};
