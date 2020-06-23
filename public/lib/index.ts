import io from 'socket.io-client';
import {SpeechRecognitionService} from "./speech-recognition-service/speech-recognition.service";
import {SocketService} from "./socket-service/socket-service";
import {VoiceSynthesiser} from "./voice-synthesiser/voice-synthesiser";
import {RecognitionFactory} from "./recognition-factory/recognition-factory";

const recognition = RecognitionFactory.create();
const voiceSynth = new VoiceSynthesiser(window.speechSynthesis);
const socketService = new SocketService(io(), voiceSynth);
const recognitionService = new SpeechRecognitionService(recognition, socketService);


document.querySelector("button")!.addEventListener("click", () => {
    recognitionService.init();
});

// recognition.addEventListener('result', (e: SpeechRecognitionEvent) => {
//     let last = e.results.length - 1;
//     let text = e.results[last][0].transcript;
//     socket.emit('chat message', text);
//     console.log('Confidence: ' + e.results[0][0].confidence);
// });

// function synthVoice(text: string) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance();
//     utterance.text = text;
//     synth.speak(utterance);
// }
//
// socket.on("bot reply", (replyText: string) => {
//     synthVoice(replyText);
//     console.log("Reply text", replyText);
// });

