SHELL := /bin/bash

export PROJECT = logistics

qaltrak-dev:
	docker build \
		-f zarf/docker/dockerfile.dev \
		-t logistics:1.0 \
		--build-arg VCS_REF=`git rev-parse HEAD` \
		--build-arg BUILD_DATE=`date -u +”%Y-%m-%dT%H:%M:%SZ”` \
		.

up:
	docker-compose -f zarf/compose/compose.yaml -f zarf/compose/compose-debug-config.yaml up --detach --remove-orphans

down:
	docker-compose -f zarf/compose/compose.yaml -f zarf/compose/compose-debug-config.yaml down --remove-orphans

logs:
	docker-compose -f zarf/compose/compose.yaml -f zarf/compose/compose-debug-config.yaml logs -f 