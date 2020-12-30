set +x
echo 'This script will clean docker containers.'
set -x
docker rm $(docker ps -aq -f "status=exited")