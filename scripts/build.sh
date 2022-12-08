#!/bin/bash

set -e

rm -rf dist

set -x
npm install
npm run build
npm run lint
npm test
npm prune --production

