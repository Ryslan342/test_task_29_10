FROM node:20

RUN apt-get update && apt-get install -y ffmpeg

WORKDIR /usr/app/

COPY package*.json ./
RUN npm install
COPY ./ ./
