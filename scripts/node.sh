#!/bin/bash

apk add --update nodejs > /dev/null 2>&1
node /config/scripts/hebcal.js $1
