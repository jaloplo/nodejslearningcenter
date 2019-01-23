var net = require('net');

var socket = new net.Socket();
socket.on('connect', function() {
    console.log('Connection established');
});

socket.connect({
    port: 4001
});