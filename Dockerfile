FROM node:18-alpine

ARG NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start"]