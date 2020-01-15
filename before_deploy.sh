#!/bin/bash

zip -r snack-news-FE packages/client/dist packages/server/dist appspec.yml execute-deploy.sh deploy/*
mkdir -p deploy
mv snack-news-FE.zip deploy/snack-news-FE.zip