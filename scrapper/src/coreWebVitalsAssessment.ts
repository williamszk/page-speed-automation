// const { By, Key, Builder } = require('selenium-webdriver');
import { By, Key, Builder } from 'selenium-webdriver';

const collect = async (driver, type) => {
	// get data from the Core Web Vitals Assessment
	let parentNode = await findParentNode(driver, type);
	let firstChildNode = await parentNode.findElement(By.xpath('./*'));
	const theText = await firstChildNode.getText();
	return theText;
};

const findParentNode = async (driver, type) => {
	let parentNode;
	if (type === 'mobile') {
		parentNode = await driver.findElement(
			By.xpath("//div[contains(text(), 'Core Web Vitals Assessment')]")
		);
	} else if (type === 'desktop') {
		let myNodes = await driver.findElements(
			By.xpath("//div[contains(text(), 'Core Web Vitals Assessment')]")
		);
		// NOTE: After some experimentation I found that is the third element which contains
		// the data that we are interested in. This is flaky, so note that in the future.
		parentNode = await myNodes[2];
	}
	return parentNode;
};

module.exports = {
	collect,
};
