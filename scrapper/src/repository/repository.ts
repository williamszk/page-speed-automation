// This is the common interface for the gatherStats object
import { writeFile } from 'fs';

const storeStats = (gatherStats: GatherStats) => {
	console.log('Storing stasts!');
	console.log('gatherStats:', gatherStats);

	// this code should be transferred later to its correct repository layer
	let jsonFile = JSON.stringify(gatherStats);
	console.log('jsonFile:', jsonFile);

	writeFile('myJsonFile.json', jsonFile, () => {
		console.log('We are saving the file myJsonFile.json');
	});
};

const repository = {
	storeStats,
};

export default repository;
