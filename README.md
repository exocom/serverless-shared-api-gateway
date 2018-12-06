Serverless Shared API Gateway Plugin
====================================

[![Build Status](https://travis-ci.org/kalarrs/serverless-shared-api-gateway.svg)](https://travis-ci.org/kalarrs/serverless-shared-api-gateway)

This plugin allows you to have multiple serverless projects update a single api gateway on aws.

Supported features:

* AWS Api Gateway

This package requires node >= 6.0


# How To

### 1. Install the plugin

```sh
npm install @kalarrs/serverless- --save-dev
```

### 2. Add the plugin to your serverless configuration file

*serverless.yml* configuration example:

```yaml
provider:
  name: aws
  runtime: nodejs6.10

functions:
  hello:
    handler: handler.hello
    events:
      - http: GET /hello

# Add serverless-shared-api-gateway to your plugins:
plugins:
  - "@kalarrs/serverless-shared-api-gateway"
```


# NOTES
After updating the binary media type, the api must be deployed for the changes to take effect.


# License & Credits

Licensed under the MIT license.