FROM node:lts-alpine

WORKDIR /usr/app

COPY package.json .
RUN yarn

ADD . .

EXPOSE 3333

CMD ["yarn", "start"]
