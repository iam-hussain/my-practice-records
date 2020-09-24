var redis = require("redis");
var publisher = redis.createClient();
publisher.publish(
  "notification",
  "{}",
  function () {
    process.exit(0);
  }
);