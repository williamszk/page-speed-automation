# page-speed-automation

In this project we build an automation for the page speed web site

## To-do

- [ ] Setup crontab to run the script every day.
- [ ] let's implement the local save, just use the local file system;
      this decision should come from a config file; we'll call the `repository`
      the place where we store the code that will be used for the persistence layer.
- [ ] then implement to save it in S3
- [ ] save the data into disk, we need to save a history of those files maybe
      we should save them in S3
- [ ] move code about scrapper to the `coreLogic` directory
      https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
- [ ] Setup an EC2 instance, t2-micro with the scrapper for it to run everyday to gather the data.
      I think using AWS EC2 for some time will give me some exposure to having
      to take care of infrastructure
      for some time. Later I could try to use different modes of EC2, like spot
      mode. And see if I can decrease
      the expenses.
- [ ] build airflow pipeline to gather data and save it somewhere
- [ ] expand the types of data that are being gathered by the scrapper,
      there were some other fields that I'm not capturing; but we could be saving
      them because we are already reading the page, we could just save them too
- [ ] how to setup airflow in production?
- [x] In the localFilesystem save make it create a directory in root called `data`
      and save the gathered files in there.
- [x] Change the name of the gathered files to include a time stamp of the collection.
- [x] Include timestamp in the final json object of gatherStats
- [x] migrate code base to typescript
- [x] change imports to use the typescript way instead of the `require` js way
- [x] create a different directory for the scrapper
- [x] build the collect functionality for Desktop
- [x] My idea is that The only difference between Desktop and Mobile is
      the index in which they need to get the node in the list of node.
      Check if this is the case, if yes we can refactor them and just include an
      if else to change the behavior accordingly.
