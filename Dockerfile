FROM node:20.11.0-slim

WORKDIR /app
COPY package.json .
COPY . /app
COPY tsconfig.json /app

RUN npm install
RUN npm run build

CMD npm start