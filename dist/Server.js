import * as http from "http";
export class Server {
    constructor(option) {
        this.option = option;
        this.HttpServer = http.createServer((request, response) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Hello World!');
        });
    }
    listen(port, callback) {
        try {
            return this.HttpServer.listen(port, callback);
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
