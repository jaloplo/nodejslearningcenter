var fs = require('fs');

const sourceFilePath = 'echo_file.in';
var sourceStream = fs.createReadStream(sourceFilePath);

const targetFilePath = 'echo_file.out';
var targetStream = fs.createWriteStream(targetFilePath);

sourceStream.pipe(targetStream);