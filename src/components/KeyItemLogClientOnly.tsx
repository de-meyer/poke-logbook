import { useState } from "react";
import useSpeechRecognition from "~/hooks/useSpeechRecognition";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
export default function KeyItemLog() {
  const {
    isListening,
    text,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  const [enabledMicrophone, setEnabledMicrophone] = useState(false);
  function handleStopListening() {
    stopListening();
    setEnabledMicrophone(false);
  }
  function handleStartListening() {
    setEnabledMicrophone(true);
    startListening();
  }
  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            {enabledMicrophone ? (
              <FaMicrophone
                onClick={handleStopListening}
                className={`${isListening ? "text-green-500" : "text-red-500"} cursor-pointer text-5xl`}
              />
            ) : (
              <FaMicrophoneSlash
                className="cursor-pointer text-5xl"
                onClick={() => handleStartListening()}
              />
            )}
            <p>{text}</p>
          </div>
        </>
      ) : (
        <h1>Your Browser doesnt support speech recognition</h1>
      )}
    </div>
  );
}
