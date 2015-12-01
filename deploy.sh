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
forever stop cartuna-landing
npm install
forever --uid "cartuna-landing" start -a app.js -p 3002
'