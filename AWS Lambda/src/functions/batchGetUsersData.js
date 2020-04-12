const config = require('../Locals');

'use strict'
const AWS = require('aws-sdk');
AWS.config.update(config)

exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient({
        region: config.region
    });

    var params = {
        RequestItems: {
            'Users': {
                Keys: [{
                    id: 1,
                }]
            },
            'Post': {
                Keys: [{
                    id: 'a',
                }]
            }
        }
    };

    try {
        const data = await docClient.batchGet(params).promise();
        console.log(JSON.stringify(data))
        return data;
    } catch (err) {
        console.log(err);
        return `Error :: ${err}`;
    }
};