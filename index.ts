import express from 'express';
import apiai from "apiai";
import io from "socket.io";
import dotenv from "dotenv";
import {ExpressServer} from "./express-server/express-server";
import {IoServer} from "./io-server/io-server";
import {ChatbotService} from "./ai-service/chatbot-service";

dotenv.config();

const expressServer = new ExpressServer(express(), __dirname + '/dist');
const serverInstance = expressServer.start(5000);
const chatbotService = new ChatbotService(apiai(process.env.APIAI_TOKEN as string));
const ioServer = new IoServer(io(serverInstance), chatbotService);
ioServer.init();
