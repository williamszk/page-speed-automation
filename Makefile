
default: rm-build build-scrapper run-scrapper 

rm-build:
	rm -rf scrapper/built

build-scrapper:
	tsc -p scrapper/

run-scrapper:
	node scrapper/built/main.js

