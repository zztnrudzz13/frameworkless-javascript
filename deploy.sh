#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

git pull

rimraf dist

npm run build

sudo npm install

sudo npx pm2 reload all