import {Application} from "apiai";
import {Socket} from "socket.io";

export class ChatbotService {

    constructor(private chatbot: Application) {}

    respondToMessage(message: string, socket: Socket) {
        let request = this.chatbot.textRequest(message, {
            sessionId: "Shagaluf"
        });
        request.on("response", response => this.publishResponse(response, socket));
        request.on("error", error => console.log(error));
        request.end();
    }

    private publishResponse(response: any, socket: Socket) {
        let aiText = response.result.fulfillment.speech;
        console.log("BOT REPLY: " + aiText);
        socket.emit("bot reply", aiText);
    }

}