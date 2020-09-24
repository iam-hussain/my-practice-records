var Queue = require('bull');
var QueueOne = new Queue('simple', 'redis://127.0.0.1:6379');

QueueOne.add({video: 'http://example.com/video1.mov'});
QueueOne.add({audio: 'http://example.com/audio1.mp3'});
QueueOne.add({image: 'http://example.com/image1.tiff'});
