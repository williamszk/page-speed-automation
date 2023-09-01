// to run me use:
// ts-node scratchPad.ts

const getTimestamp = (): string => {
	function pad2(n: number) {
		return n < 10 ? '0' + n + '-' : n + '-';
	}

	var date = new Date();
	// const dateTimeGMT = new Date().toUTCString();

	const strTimestamp =
		date.getFullYear.toString() +
		pad2(date.getUTCMonth() + 1) +
		pad2(date.getUTCDate()) +
		pad2(date.getUTCHours()) +
		pad2(date.getUTCMinutes()) +
		pad2(date.getUTCSeconds()) +
		date.getUTCMilliseconds();

	console.log(date.getFullYear().toString());
	return strTimestamp;
};

getTimestamp();
