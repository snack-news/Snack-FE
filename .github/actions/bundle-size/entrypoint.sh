#!/bin/sh

ls -lha public/dist/js/*.js  | awk '{print $5,$9}'