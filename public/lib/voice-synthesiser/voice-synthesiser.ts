export class VoiceSynthesiser {

    constructor(private synth: SpeechSynthesis) {
    }

    speak(text: string) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        this.synth.speak(utterance);
    }
}
