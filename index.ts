import express from 'express';
import http from "http";
import APIAI from "apiai";
import IO from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const apiai = APIAI(process.env.APIAI_TOKEN as string);

const app = express();

app.use(express.static(__dirname + '/dist'));

const server: http.Server = app.listen(5000);
app.get('/', (req, res) => {
    res.sendFile('index.html');
})

const io = IO(server);
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
