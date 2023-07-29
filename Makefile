
build-scrapper:
	tsc -p scrapper/

run-scrapper:
	node scrapper/built/main.js

rm-built:
	rm -rf scrapper/built
