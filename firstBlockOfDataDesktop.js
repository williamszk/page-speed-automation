const { By } = require('selenium-webdriver');

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
	myNodes = await driver.findElements(By.xpath(`//a[text()='${theText}']`));
	// for (let i = 0; i < myNodes.length; i++) {
	// 	let text = await myNodes[i].getText();
	// 	console.log(i, '>>>>>>>>>>>>>>>>>>>>>>> ', text);
	// }
	// NOTE: After some experimentation I found that is the third element which contains
	// the data that we are interested in. This is flaky, so note that in the future.

	// we need to go up one level
	let parentNode = await myNodes[2].findElement(By.xpath('./..'));
	// then the next sibling is where the number of interest is
	let siblingNodeFromParent = await parentNode.findElement(
		By.xpath('following-sibling::*[1]')
	);
	const theNumber = await siblingNodeFromParent.getText();
	return theNumber;
};

module.exports = {
	collect,
};
