// This is where we write the repository functions related to the localFilesystem
// 
//

import { writeFile } from 'fs';

const storeStats = (gatherStats: GatherStats) => {
	// this code should be transferred later to its correct repository layer
	let jsonFile = JSON.stringify(gatherStats);
	console.log('jsonFile:', jsonFile);

	writeFile('myJsonFile.json', jsonFile, () => {
		console.log('We are saving the file myJsonFile.json');
	});
};

const localFilesystemRepository = {
	storeStats,
};

export default localFilesystemRepository;
