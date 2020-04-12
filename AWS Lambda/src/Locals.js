const path = require('path');
const dotenv = require('dotenv');


dotenv.config({ path: path.join(__dirname, '../.env') });

const env = process.env.NODE_ENV || 'develoment';

const region = process.env.REGION || '';
const endpoint = process.env.ENDPOINT || '';
const accessKeyId = process.env.ACCESSKEY || '';
const secretAccessKey = process.env.SECRETACCESSKEY || '';

module.exports = {
    region,
    endpoint,
    accessKeyId,
    secretAccessKey
}