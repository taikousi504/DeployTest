FROM node:lts

WORKDIR /usr/src/app

# COPY ./package* ./
# COPY ./yarn* ./

RUN apt-get -qy update && apt-get -qy install openssl
RUN yarn install
RUN yarn add express
RUN yarn add @prisma/client
WORKDIR /usr
RUN prisma generate
WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD yarn start