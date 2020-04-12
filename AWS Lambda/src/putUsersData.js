const config = require('./Locals');

'use strict'
const AWS = require('aws-sdk');
AWS.config.update(config)

exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' });
    var params = {
        TableName: "Users",
        Item:{
            id: 3,
            name: "Jack",
            email: "jack@gmail.com",
            username: "jack"
        }
    };
    try{
        const data = await docClient.put(params).promise();
        console.log(data)
        return data;
    }catch(err){
        console.log(err);
        return `Error :: ${err}`;
    }
};
