const { By, Key, Builder } = require('selenium-webdriver');

const collect = async (driver) => {
	// get data from the Core Web Vitals Assessment
	myNode = await driver.findElement(
		By.xpath("//div[contains(text(), 'Core Web Vitals Assessment')]")
	);
	// find the first child element of the previous node
	firstChildNode = await myNode.findElement(By.xpath('./*'));
	const theText = await firstChildNode.getText();
	return theText;
};

module.exports = {
	collect,
};
