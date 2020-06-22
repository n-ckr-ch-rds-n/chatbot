import express from 'express';
import http from "http";

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const server: http.Server = app.listen(5000);
app.get('/', (req, res) => {
    res.sendFile('index.html');
})
