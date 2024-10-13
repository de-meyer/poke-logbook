import { useEffect, useRef, useState } from 'react'

let recognition: SpeechRecognition | null = null;
    if ("webkitSpeechRecognition" in window) {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.lang = "de-DE";
    }  

const useSpeechRecognition = () => {
    
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const isListeningRef = useRef(isListening); // Use a ref for isListening
    
    function handleTranscript(transcript: string) {
        if (transcript.startsWith("log")) setText(transcript);
    }

    useEffect(() => {
        if (!recognition) return;
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            if (event.results[0]?.[0]) handleTranscript(event.results[0][0].transcript);
            recognition.stop();
        };
         recognition.onend = () => {
            if (isListeningRef.current) {
                recognition.start();  // Restart recognition if still listening
            }
        };
        recognition.onerror = (event) => {
            if (event.error === "no-speech" && isListeningRef.current) {
                recognition.stop();  // Restart recognition on "no-speech" error
            }
        };        
    }, [isListening]);
    const startListening = () => {
        if (!recognition) return;
        setText("");
        setIsListening(true);
        isListeningRef.current = true;
        recognition.start();
    }
    const stopListening = () => {
        if (!recognition) return;
        setIsListening(false);
        isListeningRef.current = false;
        recognition.stop();
    }
    return {
        isListening,
        text,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition
    }
}
export default useSpeechRecognition;


