import { useState, useEffect } from "react";
import WordDisplay from "./WordDisplay";
import TypingArea from "./TypingArea";
import Timer from "./Timer";
import Stats from "./Stats";
import Mode from "./Mode";
import { generateText } from "../utils/textGenerator";

function Main() {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("words");
  const [timeLimit, setTimeLimit] = useState(30);
  const [wordCount, setWordCount] = useState(5);
  const [customText, setCustomText] = useState("");

  const resetTest = () => {
    if (mode === "custom") {
      setText(customText.trim() || "Tapez ici...");
    } else {
      setText(generateText(mode === "words" ? wordCount : 50));
    }
    setUserInput("");
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    resetTest();
  }, [mode, wordCount, customText]);

  useEffect(() => {
    if (userInput.length === 1 && !isRunning) {
      setIsRunning(true);
    }

    if (mode === "words" && userInput.length === text.length) {
      setIsRunning(false);
    }

    if (mode === "custom" && userInput.length === text.length) {
      setIsRunning(false);
    }
  }, [userInput]);

  return (
    <main className="main light__div">
      <Mode
        setMode={setMode}
        setCustomText={setCustomText}
        setTimeLimit={setTimeLimit}
        setWordCount={setWordCount}
      />
      <Timer
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        time={time}
        setTime={setTime}
      />
      <div className="typing-container margin__top-1rem">
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
