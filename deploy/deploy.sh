#!/bin/bash
HOST_NAME=SNACK-FE

echo "> 배포 어플리케이션 : $HOST_NAME"

echo "> 어플리케이션 INSALL"
npm install

echo "> 어플리케이션 BUILD"
npm run build

echo "> 어플리케이션 RUN"
nohup npm run server &
