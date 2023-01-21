#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

npm run build

sudo npm install

sudo npx pm2 reload all