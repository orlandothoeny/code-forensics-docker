#!/bin/sh

runDocker() {
  # shellcheck disable=SC2068
  docker run --rm -it -v "$(pwd):/var/www/repo" -p 3000:3000 code-forensics $@
}

generateAll() {
  reportNames='sum-of-coupling-analysis hotspot-analysis commit-message-analysis developer-effort-analysis developer-coupling-analysis system-evolution-analysis'

  for reportName in ${reportNames}
  do
    runDocker "${reportName}"
  done
}

startWebserver() {
   runDocker 'webserver'
}

generateAll
startWebserver