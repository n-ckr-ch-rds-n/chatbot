import io from 'socket.io-client';

const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognition = new SR();
recognition.lang = 'en-GB';
recognition.interimResults = false;
const socket = io();

// document.querySelector("button")!.addEventListener("click", () => {
//     recognition.start();
// });

recognition.addEventListener('result', (e: SpeechRecognitionEvent) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
    socket.emit('chat message', text);
    console.log('Confidence: ' + e.results[0][0].confidence);
});

function synthVoice(text: string) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
}

socket.on("bot reply", (replyText: string) => {
    synthVoice(replyText);
    console.log("Reply text", replyText);
});
