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
