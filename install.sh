#!/bin/bash

# client
cd ./packages/client
npm ci
cd ../../

# server
cd ./packages/server
npm ci
cd ../../
