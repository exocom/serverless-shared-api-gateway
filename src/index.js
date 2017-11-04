'use strict'

const AWS = require('aws-sdk')

class ServerlessSharedApiGateway {
  constructor (serverless, options) {
    this.serverless = serverless
    this.options = options

    this.commands = {
      shared_api_gateway: {
        validate: {
          usage: 'Checks to see if the AWS API gateway exists and if you have permission',
          lifecycleEvents: [
            'validate'
          ]
        },
        create: {
          usage: 'Creates an AWS API gateway',
          lifecycleEvents: [
            'initialize',
            'create'
          ]
        },
        delete: {
          usage: 'Deletes an AWS API gateway',
          lifecycleEvents: [
            'initialize',
            'delete'
          ]
        }
      }
    }
  }
}

module.exports = ServerlessSharedApiGateway;
