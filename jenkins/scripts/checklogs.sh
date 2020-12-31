#!/usr/bin/env sh
set -x
docker ps -a
cat .npm/eresolve-report.txt || true
cat .npm/_logs/* || true