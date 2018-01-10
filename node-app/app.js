const http = require('http');
const fs = require('fs');

function getFromClient(request, response){

    fs.readFile('./index.html', 'UTF-8', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}
var server = http.createServer(getFromClient);

server.listen(3000);