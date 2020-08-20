FROM node:latest
RUN rm -rf /usr/src/server
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY package.json /usr/src/server/
RUN npm install
COPY . /usr/src/server
COPY docker.env ./.env
EXPOSE 3000
CMD [ “npm”, “start” ]