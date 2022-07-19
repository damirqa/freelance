FROM alpine:3.15

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json ./app/

COPY package-lock.json ./app/

COPY ./ ./

RUN npm i

CMD ["npm", "run", "start"]