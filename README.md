# How to run

Just run `docker-compose up`.
Make you sure to have Docker and Docker compose installed.

## Server

To start server run:
`node ./server/index.js`

*Need a Postgres instance*

# Scripts

## Docker restart

To restart docker run `./scripts/restart-docker.sh` file or it content.

## Clear Docker Compose

To your docker compose images run `./scripts/clear-docker-compose.sh ` file or it content.

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Testing client

Go to `./client` folder project with `cd client` command.
Run `npm run test` to run client unit tests.

## Running unit tests

In development...
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

In development...
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
