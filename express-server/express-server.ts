import express, {Express} from "express";
import http from "http";
import {Response} from "express-serve-static-core";

export class ExpressServer {

    constructor(private app: Express,
                private viewsDir: string) {
        this.app.use(express.static(this.viewsDir));
        this.app.get("/", (req, res) => this.getIndex(res))
    }

    start(port: number): http.Server {
        return this.app.listen(port);
    }

    getIndex(response: Response) {
        response.sendFile("index.html");
    }

}