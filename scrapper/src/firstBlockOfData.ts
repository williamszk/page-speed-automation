// const { By } = require('selenium-webdriver');
import { By } from 'selenium-webdriver';

const collect = async (driver, type) => {
	let firstBlock: DataContainerFirstBlock = {
		cumulativeLayoutShift: '',
		firstContentfulPaint: '',
		firstInputDelay: '',
		interactionToNextPaint: '',
		largestContentfulPaint: '',
		timeToFirstByte: '',
	};

	firstBlock.largestContentfulPaint = await helperFindNodeWithStats(
		driver,
		'Largest Contentful Paint (LCP)',
		type
	);

	firstBlock.firstInputDelay = await helperFindNodeWithStats(
		driver,
		'First Input Delay (FID)',
		type
	);

	firstBlock.cumulativeLayoutShift = await helperFindNodeWithStats(
		driver,
		'Cumulative Layout Shift (CLS)',
		type
	);

	firstBlock.firstContentfulPaint = await helperFindNodeWithStats(
		driver,
		'First Contentful Paint (FCP)',
		type
	);

	firstBlock.interactionToNextPaint = await helperFindNodeWithStats(
		driver,
		'Interaction to Next Paint (INP)',
		type
	);

	firstBlock.timeToFirstByte = await helperFindNodeWithStats(
		driver,
		'Time to First Byte (TTFB)',
		type
	);

	return firstBlock;
};
// getTheFirstBlockOfData
const helperFindNodeWithStats = async (driver, theText, type) => {
	// // first, find the node which contains the text
	// myNode = await driver.findElement(By.xpath(`//a[text()='${theText}']`));
	// // we need to go up one level
	// let parentNode = await myNode.findElement(By.xpath('./..'));
	let parentNode = await findParentNode(driver, theText, type);

	// then the next sibling is where the number of interest is
	let siblingNodeFromParent = await parentNode.findElement(
		By.xpath('following-sibling::*[1]')
	);
	const theNumber = await siblingNodeFromParent.getText();
	return theNumber;
};

const findParentNode = async (driver, theText, type) => {
	let parentNode;
	if (type === 'mobile') {
		// first, find the node which contains the text
		let myNode = await driver.findElement(By.xpath(`//a[text()='${theText}']`));
		// we need to go up one level
		parentNode = await myNode.findElement(By.xpath('./..'));
	} else if (type === 'desktop') {
		// first, find the node which contains the text
		let myNodes = await driver.findElements(
			By.xpath(`//a[text()='${theText}']`)
		);
		// NOTE: After some experimentation I found that is the third element which contains
		// the data that we are interested in. This is flaky, so note that in the future.
		// we need to go up one level
		parentNode = await myNodes[2].findElement(By.xpath('./..'));
	}
	return parentNode;
};

module.exports = {
	collect,
};
