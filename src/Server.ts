import * as http from "http";

export class Server {
    private HttpServer: http.Server;

    constructor(private readonly option?: {}) {
        this.HttpServer = http.createServer((request:any, response:any) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Hello World!');
        })
    }

    public listen (port: number, callback: () => void) {
        try {
            return this.HttpServer.listen(port, callback);
        }
        catch (err: any) {
            throw new Error(err);
        }
    }
}