const config = require('../Locals');

'use strict'
const AWS = require('aws-sdk');
AWS.config.update(config)

exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient({
        region: config.region
    });

    var params = {
        TableName : 'Users',
        FilterExpression : 'username = :this_uname',
        ExpressionAttributeValues : {':this_uname' : "tony"}
      };

      var params = {
        TransactItems: [{
          Get: {
            TableName : 'Users',
            Key: {
                id: 1
            }
          }
        }, {
          Get: {
            TableName : 'Post',
            Key: {
                id: 'a'
            }
          }
        }]
      };


    try {
        const data = await docClient.transactGet(params).promise();
        console.log(JSON.stringify(data))
        return data;
    } catch (err) {
        console.log(err);
        return `Error :: ${err}`;
    }
};