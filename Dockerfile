# base image
FROM node:slim

# setting the work direcotry
WORKDIR /usr/src/app

# copy package.json
COPY ./package.json .

# install dependencies
RUN npm install

# COPY server.js
COPY ./server.js .

CMD ["node","server.js"]