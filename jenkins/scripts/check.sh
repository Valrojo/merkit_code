#!/usr/bin/env sh
set -x
pwd
ls
ls ../
ls ../merkit_dbs/ || true
mkdir ../merkit_dbs/ || true
docker ps -a