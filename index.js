/**
 * @TODO implement node-cluster
 *
 */

const cluster = require('cluster');
var numCPUs = 4;

const http = require('http');

const serverWrapper = require('./lib/server-wrapper');

const hostname = '127.0.0.1';


const port = 8080;


if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} 
else {
    const server = http.createServer(serverWrapper);
    server.listen(port, hostname, () => console.log(`Server listening on port: ${port}`));
}
