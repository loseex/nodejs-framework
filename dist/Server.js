import * as http from "http";
export class Server {
    constructor(option) {
        this.option = option;
        this.HttpServer = http.createServer((request, response) => {
            response.setHeader('Content-Type', 'text/plain');
            response.statusCode = 200;
            switch (request.url) {
                case "/": {
                    response.end("Index Route");
                }
            }
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
