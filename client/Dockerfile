FROM node:latest
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client
COPY package.json /usr/src/client/
RUN npm install
RUN npm install -g @angular/cli@10.0.3
COPY . /usr/src/client
EXPOSE 4200