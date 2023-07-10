# page-speed-automation

In this project we build an automation for the page speed web site

## To-do

- [ ] how to setup airflow in production?
- [ ] create a different directory for the scrapper
- [ ] save the data into disk, we need to save a history of those files maybe we should save them in S3
- [ ] build airflow pipeline to gather data and save it somewhere
- [ ] expand the types of data that are being gathered by the scrapper, there were some other fields that I'm not capturing; but we could be saving them because we are already reading the page, we could just save them too
- [x] build the collect functionality for Desktop
- [x] My suspicion is that The only difference between Desktop and Mobile is
the index in which they need to get the node in the list of node.
Check if this is the case, if yes we can refactor them and just include an
if else to change the behavior accordingly.
