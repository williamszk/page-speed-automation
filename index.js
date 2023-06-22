// use selenium to enter into page-speed

// https://pagespeed.web.dev/

const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');
let chrome = require('selenium-webdriver/chrome');

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

async function func01() {
	// var searchString = "Automation testing with Selenium and JavaScript";
	const site = 'https://pagespeed.web.dev/';

	let options = new chrome.Options();
	options.addArguments('--incognito');

	// To wait for browser to build and launch properly
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(options)
		.build();

	await driver.get(site);

	driver.manage().window().maximize();

	let myNode = await driver.findElements(
		By.xpath("//input[@placeholder='Enter a web page URL']")
	);
	typeStringIntoInput(myNode[0], 'https://www.medcel.com.br/', 3000);

	{
		/* <span jsname="V67aGc" class="VfPpkd-vQzf8d">Analyze</span> */
	}
	myNode = await driver.findElements(By.xpath("//span[text()='Analyze']"));
	myNode[0].click();

	// const actions = driver.actions({ bridge: true });
	// await driver
	// 	.findElement(By.xpath("//span[text()='Cursos Completos']"))
	// 	.then((elem00) => {
	// 		actions
	// 			.move({ duration: 3000, origin: elem00, x: 0, y: 0 })
	// 			.perform()
	// 			.then(() => {
	// 				console.log('>>>>> Monkey 00');
	// 			});
	// 		console.log('>>>>> Monkey 01');
	// 	});

	await delay(120000).then(() => console.log('ran after 120 second passed'));
	await driver.quit();
}

const typeStringIntoInput = async (element, word, waitTime = 0) => {
	element.sendKeys(word);
	await delay(waitTime).then(() => null);
};

func01();
