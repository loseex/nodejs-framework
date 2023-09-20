/// <reference types="node" />
import * as http from "http";
export declare class Server {
    private readonly option?;
    private HttpServer;
    constructor(option?: {});
    listen(port: number, callback: () => void): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}
