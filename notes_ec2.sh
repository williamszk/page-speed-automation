
url=ec2-15-228-39-121.sa-east-1.compute.amazonaws.com

sudo chmod 400 /home/william/Documents/aws_some_notes/personal_aws/my-personal-key-pair.pem
sudo ssh -i /home/william/Documents/aws_some_notes/personal_aws/my-personal-key-pair.pem ubuntu@$url

# [inside the ec2 instance]
sudo apt update
# git is already installed
git clone https://github.com/williamszk/page-speed-automation.git
cd page-speed-automation

# there is no node installed
# install some nodejs stuff
sudo apt install npm -y
sudo npm install -g nodemon
sudo npm install -g n
sudo n stable

node -v

npm i

# I need to install the chrome binary
# https://geekflare.com/install-chromium-ubuntu-centos/
# install dependencies for chromium 
sudo apt --fix-broken install
sudo apt-get install -y libappindicator1 fonts-liberation
sudo apt-get install -f
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb
# check chromium version
google-chrome-stable -version

# check if the program runs
cd page-speed-automation/
node main.js
