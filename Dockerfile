FROM node:10.6.0-alpine
LABEL maintainer="vicentepons.rb@gmail.com"

ENV APP_PATH /opt/app
WORKDIR $APP_PATH

COPY package.json package-lock.json $APP_PATH/
RUN npm install

COPY . $APP_PATH

EXPOSE 8080

CMD [ "vue", "serve" ]
