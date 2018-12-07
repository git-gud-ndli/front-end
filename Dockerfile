FROM node:11-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.15-alpine
RUN sed -i \
  '/index.htm/a try_files $uri $uri/ /index.html =404;' \
  /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY start.sh /
EXPOSE 80

CMD ["sh", "/start.sh"]
