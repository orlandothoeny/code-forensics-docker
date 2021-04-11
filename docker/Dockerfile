FROM openjdk:8-alpine

RUN apk update \
    && apk add curl ca-certificates git subversion less nodejs-npm

RUN npm install -g gulp code-forensics --unsafe-perm \
    && npm link gulp \
    && npm link code-forensics

ENV SERVER_PORT=3000
ENV SERIAL_PROCESSING=true
ENV COMMAND_DEBUG=true

WORKDIR /var/www/repo

COPY gulpfile.default.js /var/www/gulpfile.default.js
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["list-analysis-tasks"]