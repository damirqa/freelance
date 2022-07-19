FROM alpine:3.15

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

CMD ['npm', 'run', 'start:dev']