set +x
echo 'This script will clean docker containers.'
set -x
pwd
ls
ls ../
docker rm $(docker ps -a -f "status=exited")