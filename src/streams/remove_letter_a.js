var Transform = require('stream').Transform;

var removeLetterA = new Transform({
    write: function(chunk, encoding, callback) {
        var content = chunk.toString().trim().replace(/a/gi, '').trim();
        this.push(content);
        callback();
    }
});

process.stdin.pipe(removeLetterA).pipe(process.stdout);