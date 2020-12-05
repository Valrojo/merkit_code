#!/usr/bin/env sh

echo 'Moving artifacts to /home/vps218/www/merkit'


set -x
cp build/** /home/vps218/www/merkit/
ls /home/vps218/www/merkit
echo 'Kill container'
docker kill example-pipeline
echo 'Serve build'
docker run -dit --name example-pipeline -p 8081:80 -v /home/vps218/www/merkit/:/usr/local/apache2/htdocs/ httpd:2.4
set +x

echo 'Running container'
