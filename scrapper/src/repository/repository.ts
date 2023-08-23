// This is the common interface for the gatherStats object
//
//

import localFilesystemRepository from './localFilesystem/repository';

const storeStats = (gatherStats: GatherStats) => {
	const whichRepository = "localFilesystem"
	switch (whichRepository) {
		case 'localFilesystem':
			localFilesystemRepository.storeStats(gatherStats);
			break;
		default:
			break;
	}
};

const repository = {
	storeStats,
};

export default repository;
