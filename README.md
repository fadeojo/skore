# SKORE
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Required environment variables
```bash
# Auth0 config
SKORE_ISSUER="https://dev-5s8ily6g.auth0.com/"
SKORE_JWKSURI="${SKORE_ISSUER}.well-known/jwks.json"
SKORE_CLIENT_ID="WNxulGlXoi0UuWPTa14L372GWzAW2ZS6"
SKORE_CLIENT_SECRET=
SKORE_REALM="skore"

# Manilgun config
MAILGUN_APIKEY
MAILGUN_DOMAIN
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

