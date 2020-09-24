var kue = require("kue"),
  queue = kue.createQueue({
    prefix: 'q',
    redis: {
      port: 6379,
      host: 'localhost',
    //   auth: 'password',
      db: 3, // if provided select a non-default redis db
      options: {
        // see https://github.com/mranney/node_redis#rediscreateclient
      }
    }
  });

queue.process("email", function (job, done) {
    console.log(job.data, "====================");
    done();
  });
  