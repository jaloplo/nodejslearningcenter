var fs = require('fs');
var Writable = require('stream').Writable;

const sourceFilePath = 'echo_file.in';
var sourceStream = fs.createReadStream(sourceFilePath);

var echoStream = new Writable({
    write: function(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
});

sourceStream.pipe(echoStream);