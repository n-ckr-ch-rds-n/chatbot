export class RecognitionFactory {

    static create(): SpeechRecognition {
        const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SR();
        recognition.lang = "en-GB";
        recognition.interimResults = false;
        return recognition;
    }

}