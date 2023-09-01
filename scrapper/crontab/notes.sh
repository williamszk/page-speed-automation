# those are notes that should be run from the root of the project
chmod +x ./scrapper/crontab/run_scrapper.sh


crontab -e
~/page-speed-automation/scrapper/crontab/run_scrapper.sh
0 0 * * * ~/page-speed-automation/scrapper/crontab/run_scrapper.sh