import {SocketService} from "../socket-service/socket-service";

export class SpeechRecognitionService {

    constructor(private recognition: SpeechRecognition,
                private socketService: SocketService) {
        this.recognition.addEventListener("result",
            (e) => this.handleResult(e));
    }

    init() {
        this.recognition.start();
    }

    handleResult(result: SpeechRecognitionEvent) {
        let last = result.results.length - 1;
        let text = result.results[last][0].transcript;
        this.socketService.emitMessage(text);
        console.log('Confidence: ' + result.results[0][0].confidence);
    }
}
