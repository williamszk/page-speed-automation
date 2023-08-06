const sleep = async (waitTime, customMessage) => {
	console.log(`Sleep for ${waitTime / 1000} seconds... (${customMessage})`);
	await delay(waitTime).then(() => null);
};

const delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

const typeStringIntoInput = async (element, word, waitTime = 0) => {
	element.sendKeys(word);
	await delay(waitTime).then(() => null);
};

const utils = {
	sleep,
	typeStringIntoInput,
};

export default utils;
