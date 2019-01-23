var net = require('net');

var server = new net.Server(function(conn) {
    console.log('connection established.')

    conn.on('data', function(data) {
        console.log('Data received: ', data.toString());
    });
});

server.listen({
    port: 4001,
}, function() {
    console.log('server listening on port 4001');
});