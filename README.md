# Docker image for [code-forensics](https://github.com/smontanari/code-forensics)
This Docker image provides an easy way to use [smontanari's](https://github.com/smontanari) codebase analysis tool [code-forensics](https://github.com/smontanari/code-forensics).

## Usage

### Use local image
If you want, you can build the image yourself:
```shell
sh build.sh
```

### Run

#### Generate reports of all types & run webserver
This generates reports & starts a local webserver listening on [localhost:3000](http://localhost:3000/index.html).
Except reports that are for a specific file. Namely [Complexity trend analysis](https://github.com/smontanari/code-forensics/wiki/Complexity-trend-analysis). 
```shell
sh run.sh
```

#### Run manually
```shell
docker run --rm -it -v "$(pwd):/var/www/repo" -p 3000:3000 code-forensics ${TASK}
```

### Configuration
A [default gulpfile.js](./docker/gulpfile.default.js) configuration file is used if none exists in the repository that should be analysed.

For more information about possible configuration options see the [documentation](https://github.com/smontanari/code-forensics/wiki/Configuration).