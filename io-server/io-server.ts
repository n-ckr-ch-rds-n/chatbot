import IO, {Socket} from "socket.io";
import {ChatbotService} from "../ai-service/chatbot-service";

export class IoServer {

    constructor(private io: IO.Server,
                private chatbotService: ChatbotService) {
    }

    init() {
        this.io.on("connection", (socket) => this.listenForMessages(socket));
    }

    listenForMessages(socket: Socket) {
        socket.on("chat message",
            (message) => this.chatbotService.respondToMessage(message, socket));
    }

}