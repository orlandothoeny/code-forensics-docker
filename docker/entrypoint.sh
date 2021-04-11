#!/bin/sh

if [ ! -f 'gulpfile.js' ];
then
  echo 'gulpfile.js does not exist. Using default'
  cp /var/www/gulpfile.default.js ./gulpfile.js
fi

# shellcheck disable=SC2068
gulp $@