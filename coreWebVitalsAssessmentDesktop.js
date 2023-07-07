const { By, Key, Builder } = require('selenium-webdriver');

const collect = async (driver) => {
	// get data from the Core Web Vitals Assessment
	let myNodes = await driver.findElements(
		By.xpath("//div[contains(text(), 'Core Web Vitals Assessment')]")
	);
	// let text = await myNode.getText();
	// console.log('>>>>>>>>>>>>>>>>>>>>>>> ', myNodes);
	// for (let i = 0; i < myNodes.length; i++) {
	// 	let text = await myNodes[i].getText();
	// 	console.log('>>>>>>>>>>>>>>>>>>>>>>> ', text);
	// }
	// NOTE: After some experimentation I found that is the third element which contains
	// the data that we are interested in. This is flaky, so note that in the future.
	let theParent = await myNodes[2];

	// find the first child element of the previous node
	firstChildNode = await theParent.findElement(By.xpath('./*'));

	// let temp01 = await myNode.findElements(By.xpath('./*'));
	// for (let i = 0; i < temp01.length; i++) {
	// 	let text = await temp01[i].getText();
	// 	console.log('>>>>>>>>>>>>>>>>>>>>>>> ', text);
	// }

	const theText = await firstChildNode.getText();
	return theText;
};

module.exports = {
	collect,
};
