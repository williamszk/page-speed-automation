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

const getTimestamp = (): string => {
	const sep = '-';

	function pad2(n: number) {
		return n < 10 ? '0' + n : n;
	}

	var date = new Date();
	// const dateTimeGMT = new Date().toUTCString();

	const strTimestamp =
		date.getUTCFullYear().toString().substring(2, 4) +
		pad2(date.getUTCMonth() + 1) +
		pad2(date.getUTCDate()) +
		sep +
		pad2(date.getUTCHours()) +
		pad2(date.getUTCMinutes()) +
		pad2(date.getUTCSeconds()) +
		pad2(date.getUTCMilliseconds());

	return strTimestamp;
};

const utils = {
	sleep,
	typeStringIntoInput,
	getTimestamp,
};

export default utils;
