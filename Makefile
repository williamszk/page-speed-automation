
build-scrapper:
	tsc -p scrapper/

run-scrapper:
	node scrapper/built/main.js
