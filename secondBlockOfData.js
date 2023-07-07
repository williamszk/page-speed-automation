const { setDefaultService } = require('selenium-webdriver/chrome.js');
const utils = require('./utils.js');

const { By } = require('selenium-webdriver');

const collect = async (driver, type) => {
	// scroll down the window
	driver.executeScript('window.scrollBy(0, 500);');
	await utils.sleep(20000, 'waiting to load the second block...');

	let gatherStats = {};
	// collect data
	gatherStats.performance = await helperFindNodeWithStats(
		driver,
		'#performance',
		type
	);
	gatherStats.accessibility = await helperFindNodeWithStats(
		driver,
		'#accessibility',
		type
	);
	gatherStats.bestPractices = await helperFindNodeWithStats(
		driver,
		'#best-practices',
		type
	);
	gatherStats.seo = await helperFindNodeWithStats(driver, '#seo', type);

	return gatherStats;
};

const helperFindNodeWithStats = async (driver, searchingText, type) => {
	let theText = await findTheText(driver, searchingText, type);

	let theTextArray = await theText.split('\n');
	let theText2 = await theTextArray[0];

	return theText2;
};

const findTheText = async (driver, searchingText, type) => {
	let theText;
	if (type === 'mobile') {
		let myNodes = await driver.findElements(
			By.xpath(`//a[@href='${searchingText}']`)
		);
		theText = await myNodes[1].getText();
	} else if (type === 'desktop') {
		let myNodes = await driver.findElements(
			By.xpath(`//a[@href='${searchingText}']`)
		);
		// NOTE: After some experimentation I found that is the forth element which contains
		// the data that we are interested in. This is flaky, so note that in the future.
		theText = await myNodes[3].getText();
	}

	return theText;
};

module.exports = {
	collect,
};
