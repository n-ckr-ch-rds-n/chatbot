import express from 'express';
import http from "http";
import apiai from "apiai";
import io from "socket.io";
import dotenv from "dotenv";

dotenv.config();

apiai(process.env.APIAI_TOKEN as string);

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const server: http.Server = app.listen(5000);
app.get('/', (req, res) => {
    res.sendFile('index.html');
})

const socket = io(server);

