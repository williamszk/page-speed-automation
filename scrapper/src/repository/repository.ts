// This is the common interface for the gatherStats object

const storeStats = (gatherStats: GatherStats) => {
	console.log('Storing stasts!');
	console.log(gatherStats);
};

const repository = {
	storeStats,
};

export default repository;
