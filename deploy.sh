#!/bin/sh

## CHANGE 'WEBSITE' to project name
## CHANGE port number

echo ""
echo "Deploying cartuna-landing on prod server 104.236.220.177"
echo "--------------------------------------------------------"
ssh nodeapps@104.236.220.177 '
eval `ssh-agent` && ssh-add ~/.ssh/id_rsa
cd ~/sites/cartuna-landing
git pull
forever stop 2
npm install
forever start app.js -p 3002
'