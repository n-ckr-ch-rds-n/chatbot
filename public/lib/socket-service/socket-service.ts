import Socket = SocketIOClient.Socket;

export class SocketService {

    constructor(private socket: Socket) {
    }

    emitMessage(text: string) {
        this.socket.emit("chat message", text);
    }
}