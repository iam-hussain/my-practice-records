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

var job = queue
  .create("email", {
    title: "welcome email for tj1",
    to: "tj@learnboost.com",
    template: "welcome-email",
  })
  .save(function (err) {
    // if (!err) console.log(job.id);
  });

queue
  .create("email", {
    title: "welcome email for tj2",
    to: "tj@learnboost.com",
    template: "welcome-email",
  })
  .priority("high")
  .save();

queue
  .create("email", {
    title: "welcome email for tj3",
    to: "tj@learnboost.com",
    template: "welcome-email",
    test: () => {
      console.log(aaa);
    },
  })
  .priority("high")
  .attempts(5)
  .save();

queue.create("video conversion", {
  title: "converting loki's to avi",
  user: 1,
  frames: 200,
});

job
  .on("complete", function (result) {
    console.log("Job completed with data ", result);
  })
  .on("failed attempt", function (errorMessage, doneAttempts) {
    console.log("Job failed");
  })
  .on("failed", function (errorMessage) {
    console.log("Job failed");
  })
  .on("progress", function (progress, data) {
    console.log(
      "\r  job #" + job.id + " " + progress + "% complete with data ",
      data
    );
  });
