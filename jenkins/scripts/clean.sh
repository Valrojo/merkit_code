set +x
echo 'Se limpian los contenedores Docker. En particular, se destruyen los utilizados en otras ramas.'
set -x
docker-compose down
docker stop 8ece017e0be5 || true
docker stop 2c5322c882c5 || true
docker stop 8ad216b6f3d3 || true
docker rm $(docker ps -aq -f "status=exited") || true