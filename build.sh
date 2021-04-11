#!/bin/sh

buildDocker() {
  docker build -t code-forensics --file ./docker/Dockerfile ./docker
}

buildDocker