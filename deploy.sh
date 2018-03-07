#!/usr/bin/env bash

# Build hugo
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
rm -rf public

cd $DIR/site
hugo
cp -R $DIR/site/public $DIR/public

# deploy to firebase
firebase deploy --only hosting
