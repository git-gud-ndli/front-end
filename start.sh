#!/bin/sh

set -aux

cd /usr/share/nginx/html
mv index.html index.template.html
envsubst < index.template.html > index.html
exec nginx -g 'daemon off;'
