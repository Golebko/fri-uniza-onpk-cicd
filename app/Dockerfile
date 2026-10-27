FROM node:current-alpine

WORKDIR /app

COPY src/package.json .
RUN npm install --verbose

COPY src .

CMD [ "npm", "start" ]
