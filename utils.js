const sleep = async (waitTime, customMessage) => {
	console.log(`Sleep for ${waitTime / 1000} seconds... (${customMessage})`);
	await delay(waitTime).then(() => null);
};

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

const typeStringIntoInput = async (element, word, waitTime = 0) => {
	element.sendKeys(word);
	await delay(waitTime).then(() => null);
};

module.exports = {
	sleep,
	typeStringIntoInput,
};
