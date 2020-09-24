var cache = require('memory-cache');
var newCache = new cache.Cache();

cache.put('houdini', {Data: true},100); // Time in ms
 
console.log('Houdini will now ' + cache.get('houdini'));
 
setTimeout(function() {
    console.log('Houdini is ' + cache.get('houdini'));
}, 200);