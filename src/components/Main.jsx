import { useState, useEffect } from "react";
import WordDisplay from "./WordDisplay";
import TypingArea from "./TypingArea";
import Timer from "./Timer";
import Stats from "./Stats";
import { generateText } from "../utils/textGenerator";

function Main() {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const resetTest = () => {
    setText(generateText(5));
    setUserInput("");
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    setText(generateText(5));
  }, []);

  useEffect(() => {
    if (userInput.length === 1 && !isRunning) {
      setIsRunning(true);
    }

    if (userInput.length === text.length) {
      setIsRunning(false);
    }
  }, [userInput]);

  return (
    <main className="main light__div">
      <Timer
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        time={time}
        setTime={setTime}
      />
      <div className="typing-container">
        <WordDisplay text={text} userInput={userInput} />
        <TypingArea userInput={userInput} setUserInput={setUserInput} />
      </div>
      <Stats text={text} userInput={userInput} time={time} />
      <button onClick={resetTest} className="reset-btn">
        Recommencer
      </button>
    </main>
  );
}

export default Main;
