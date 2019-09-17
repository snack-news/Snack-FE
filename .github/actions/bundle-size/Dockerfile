FROM node:10.14

LABEL "com.github.actions.name"="Bundle Size"
LABEL "com.github.actions.description"="Check production bundle size"
LABEL "com.github.actions.icon"="archive"
LABEL "com.github.actions.color"="orange"

RUN apt-get update && \
    apt-get install -y jq

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]