#!/bin/bash
ENVIRONMENT=production

# client build
cd ./packages/client
npm run build:production
cd ../../

# server build
cd ./packages/server
npm run build:production
cd ../../