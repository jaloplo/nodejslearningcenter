var fs = require('fs');

const sourceFilePath = 'copy_file.in';
var sourceStream = fs.createReadStream(sourceFilePath);

const targetFilePath = 'copy_file.out';
var targetStream = fs.createWriteStream(targetFilePath);

sourceStream.pipe(targetStream);