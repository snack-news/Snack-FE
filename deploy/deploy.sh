#!/bin/bash
HOST_NAME=SNACK-FE
BASE_PATH=/home/ec2-user/snack-fe
BUILD_PATH=${BASE_PATH}/build
SNACKFE1_PORT=3001
SNACKFE2_PORT=3002


if [[ $(sudo netstat -ntlp | grep ${SNACKFE1_PORT} | wc -l) == 1 ]]
then
    echo "> 사용중인 PROFILE SNACKFE1"
    echo "> 사용가능 PROFILE SNACKFE2"
    IDLE_PROFILE=snackfe2
    RUN_PROFILE=snackfe1
    IDLE_PORT=${SNACKFE2_PORT}
    ORIGIN_PROFILE=snackfe1
elif [[ $(sudo netstat -ntlp | grep ${SNACKFE2_PORT} | wc -l) == 1 ]]
then
    echo "> 사용중인 PROFILE SNACKFE2"
    echo "> 사용가능 PROFILE SNACKFE1"
    IDLE_PROFILE=snackfe1
    RUN_PROFILE=snackfe2
    IDLE_PORT=${SNACKFE1_PORT}
else
  echo "> 일치하는 Profile이 없습니다."
  echo "> set1을 할당합니다. IDLE_PROFILE: SNACKFE1"
  IDLE_PROFILE=snackfe1
  IDLE_PORT=${SNACKFE1_PORT}
fi

echo "> pm2 stop $IDLE_PROFILE"
pm2 stop ${IDLE_PROFILE}
pm2 delete ${IDLE_PROFILE}
sleep 5

IDLE_PATH=${BASE_PATH}/${IDLE_PROFILE}
echo "> 기존에 있던 파일들을 삭제합니다."
rm -rf ${IDLE_PATH}

echo "> 새로 업데이트 된 소스를 쉬고 있는 Profile에 복사합니다"
mkdir -p ${IDLE_PATH} && cp -R ${BUILD_PATH}/* ${IDLE_PATH}

cd ${IDLE_PATH}
echo "> ${IDLE_PATH}"

echo "> 어플리케이션 RUN"
sudo PORT=${IDLE_PORT} pm2 start ${IDLE_PATH}/packages/server/dist/index.js --name ${IDLE_PROFILE}

echo "> Nginx 스위칭"
sleep 2

echo "> 전환할 Port: $IDLE_PORT"
echo "> Port 전환"
echo "set \$snack_news_fe_url http://127.0.0.1:${IDLE_PORT};" | sudo tee /etc/nginx/conf.d/snack-fe-url.inc
echo "> Nginx Reload"
sudo service nginx reload


echo "> pm2 stop $RUN_PROFILE"
sudo pm2 stop ${RUN_PROFILE}
sudo pm2 delete ${RUN_PROFILE}
