var fs = require('fs');

var Transform = require('stream').Transform;

var fileServer = new Transform({
    transform: function(chunk, encoding, callback) {
        var filePath = chunk.toString().trim();

        var currentThis = this;
        fs.readFile(filePath, function(err, data) {
            if(err) {
                throw err;
            }
            currentThis.push(data);
        });

        callback();
    },
});

process.stdin.pipe(fileServer).pipe(process.stdout);