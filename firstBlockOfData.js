const { By, Key, Builder } = require('selenium-webdriver');

const collect = async (driver) => {
	let gatherStats = {};

	gatherStats.largestContentfulPaint = await helperFindNodeWithStats(
		driver,
		'Largest Contentful Paint (LCP)'
	);

	gatherStats.firstInputDelay = await helperFindNodeWithStats(
		driver,
		'First Input Delay (FID)'
	);

	gatherStats.cumulativeLayoutShift = await helperFindNodeWithStats(
		driver,
		'Cumulative Layout Shift (CLS)'
	);

	gatherStats.firstContentfulPaint = await helperFindNodeWithStats(
		driver,
		'First Contentful Paint (FCP)'
	);

	gatherStats.firstContentfulPaint = await helperFindNodeWithStats(
		driver,
		'First Contentful Paint (FCP)'
	);

	gatherStats.interactionToNextPaint = await helperFindNodeWithStats(
		driver,
		'Interaction to Next Paint (INP)'
	);

	gatherStats.timeToFirstByte = await helperFindNodeWithStats(
		driver,
		'Time to First Byte (TTFB)'
	);

	return gatherStats;
};
// getTheFirstBlockOfData
const helperFindNodeWithStats = async (driver, theText) => {
	// first, find the node which contains the text
	myNode = await driver.findElement(By.xpath(`//a[text()='${theText}']`));
	// we need to go up one level
	let parentNode = await myNode.findElement(By.xpath('./..'));
	// then the next sibling is where the number of interest is
	let siblingNodeFromParent = await parentNode.findElement(
		By.xpath('following-sibling::*[1]')
	);
	const theNumber = await siblingNodeFromParent.getText();
	// theNumber is e.g. 4s; 45ms; etc
	// TODO: we need to transform this string into a number
	return theNumber;
};

module.exports = {
	collect,
};
