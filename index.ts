import express from 'express';
import http from "http";
import APIAI from "apiai";
import IO from "socket.io";
import dotenv from "dotenv";
import {ExpressServer} from "./express-server/express-server";

dotenv.config();

const apiai = APIAI(process.env.APIAI_TOKEN as string);
const expressServer = new ExpressServer(express());
const serverInstance = expressServer.start(5000);




const io = IO(serverInstance);

io.on("connection", (socket) => {
    socket.on("chat message", text => {

        let apiaiReq = apiai.textRequest(text, {
            sessionId: "Shagaluf"
        });

        apiaiReq.on("response", response => {
            let aiText = response.result.fulfillment.speech;
            console.log("BOT REPLY: " + aiText)
            socket.emit("bot reply", aiText)
        });

        apiaiReq.on("error", error => {
            console.log(error);
        })

        apiaiReq.end();
    })
})
