FROM node:alpine AS build-env

LABEL maintainer="Oliger Timothee" \
                        version="2.0"

ENV API_HOST "localhost:8081"

WORKDIR /app

ADD app /app

RUN cd /app && npm i && npm run build


FROM nginx:alpine

ADD default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-env /app/dist /usr/share/nginx/html

EXPOSE  80
