export class SpeechRecognitionService {
    speechRecognition: SpeechRecognition;

    constructor() {
        this.speechRecognition = new window.SpeechRecognition();
        this.speechRecognition.lang = 'en-GB';
        this.speechRecognition.interimResults = false;
    }

    init() {
        this.speechRecognition.start();
    }
}
