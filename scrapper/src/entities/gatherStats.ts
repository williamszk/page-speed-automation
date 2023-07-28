type GatherStats = {
	mobile: DataContainer01;
	desktop: DataContainer01;
};

type DataContainer01 = {
	coreWebVitalsAssessment: string;
	statsFirstBlock: DataContainerFirstBlock;
	statsSecondBlock: DataContainerSecondBlock;
};

type DataContainerFirstBlock = {
	largestContentfulPaint: string;
	firstInputDelay: string;
	cumulativeLayoutShift: string;
	firstContentfulPaint: string;
	interactionToNextPaint: string;
	timeToFirstByte: string;
};

type DataContainerSecondBlock = {
	performance: string;
	accessibility: string;
	bestPractices: string;
	seo: string;
};
