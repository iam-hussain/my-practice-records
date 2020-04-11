'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1', endpoint: "http://dynamodb.ap-south-1.amazonaws.com", accessKeyId: "AKIAIQLKFLYAME7Q7ZRQ", secretAccessKey:"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" })

exports.handler = async (event, context) => {
    var docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' });
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
