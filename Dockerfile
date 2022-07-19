FROM node:lts

WORKDIR /usr/src/app

# COPY ./package* ./
# COPY ./yarn* ./

RUN apt-get -qy update && apt-get -qy install openssl
RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn start