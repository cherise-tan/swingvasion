FROM node:10

WORKDIR /var/app

ADD package.json package-lock.json /var/app/
RUN npm install

ADD . /var/app

CMD ["node", "app.js"]

