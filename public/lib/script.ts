const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognition = new SR();
recognition.lang = 'en-GB';
recognition.interimResults = false;

document.querySelector("button")!.addEventListener("click", () => {
    recognition.start();
});

recognition.addEventListener('result', (e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;

    console.log('Confidence: ' + e.results[0][0].confidence);
});
