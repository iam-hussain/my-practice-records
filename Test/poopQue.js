const redis = require("redis");
let redisClient = redis.createClient();

redisClient.lpop(['test-key'], function (err, reply) {
    console.log("Popped item", reply);
});
