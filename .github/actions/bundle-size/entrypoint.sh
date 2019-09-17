#!/bin/sh

DATA=$(ls -lha build/static/js/*.js  | awk '{print $5,$9}')
echo $DATA

URL=$(cat /github/workflow/event.json | jq -r .pull_request._links.comments.href)

COMMENT="### Bundle Size:
$DATA
"

PAYLOAD=$(echo '{}' | jq --arg body "$COMMENT" '.body = $body')

curl -d "$PAYLOAD" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -X POST "$URL"