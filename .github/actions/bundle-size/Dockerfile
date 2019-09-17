FROM node:10.14

LABEL "com.github.actions.name"="Bundle Size"
LABEL "com.github.actions.description"="Check production bundle size"
LABEL "com.github.actions.icon"="archive"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/outsideris/actions-test/actions/bundle-size"
LABEL "homepage"="http://github.com/outsideris/actions-test"
LABEL "maintainer"="Outsider <outsider@example.com>"

RUN apt-get update && \
    apt-get install -y jq

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]