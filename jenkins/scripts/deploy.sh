set -x
cp build/** /home/vps218/www
sudo docker kill example-pipeline
sudo docker run -dit --name example-pipeline -p 8081:80 -v /home/vps218/www/:/usr/local/apache2/htdocs/ httpd:2.4
set +x