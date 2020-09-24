var Queue = require('bull');
var QueueOne = new Queue('simple', 'redis://127.0.0.1:6379');

QueueOne.process(function(job, done){
    console.log(job.data)
    done();
})