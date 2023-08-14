
default: rm-build build-scrapper run-scrapper 

rm-build:
	rm -rf scrapper/built

build-scrapper:
	cd scrapper/ && \
	tsc

run-scrapper:
	node scrapper/built/main.js

