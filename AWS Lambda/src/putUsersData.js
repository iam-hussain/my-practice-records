'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1', endpoint: "http://dynamodb.ap-south-1.amazonaws.com", accessKeyId: "AKIAIQLKFLYAME7Q7ZRQ", secretAccessKey:"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" })

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
