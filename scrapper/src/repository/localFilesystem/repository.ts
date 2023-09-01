// This is where we write the repository functions related to the localFilesystem
//
//

import { writeFile, existsSync, mkdirSync } from 'fs';
import utils from '../../utils';

const storeStats = (gatherStats: GatherStats) => {
	let jsonFile = JSON.stringify(gatherStats);

	// create directory for storing the gathered stats
	const dir = './data/';
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}

	// create directory for storing the gathered stats
	const fileName = `${utils.getTimestamp()}.json`;
	writeFile(`data/${fileName}`, jsonFile, () => {
		console.log('We are saving the json file');
	});
};

const localFilesystemRepository = {
	storeStats,
};

export default localFilesystemRepository;
