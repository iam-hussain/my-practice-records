const redis = require("redis");
let redisNotReady = true;
let redisClient = redis.createClient();
redisClient.on("error", (err) => {
   console.log("error", err)
});
redisClient.on("connect", (err) => {
    console.log("connect");
});
redisClient.on("ready", (err) => {
    redisNotReady = false;
    console.log("ready");
});


redisClient.rpush(['test-key', "l1"], function (err, reply) {
    console.log("Queue Length", reply);
});
redisClient.rpush(['test-key', "l1", "l2"], function (err, reply) {
    console.log("Queue Length", reply);
});