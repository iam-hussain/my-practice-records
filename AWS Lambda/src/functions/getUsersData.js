
const config = require('../Locals');

'use strict'
const AWS = require('aws-sdk');
AWS.config.update(config)

exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient({ region: config.region });
    var params = {
        TableName: "Users",
        Key:{
            id: 1
        }
    };
    try{
        const data = await docClient.get(params).promise();
        console.log(data)
        return data;
    }catch(err){
        console.log(err);
        return `Error :: ${err}`;
    }
};
