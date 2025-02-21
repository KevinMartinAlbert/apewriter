import { useState } from "react";

const Mode = ({ setMode, setCustomText, setTimeLimit, setWordCount }) => {
  const [selectedMode, setSelectedMode] = useState("words");
  const [customInput, setCustomInput] = useState("");
  const [timeLimit, setLocalTimeLimit] = useState(30);
  const [wordCount, setLocalWordCount] = useState(5);

  const handleModeChange = (e) => {
    const mode = e.target.value;
    setSelectedMode(mode);
    setMode(mode);
  };

  const handleCustomTextChange = (e) => {
    setCustomInput(e.target.value);
    setCustomText(e.target.value);
  };

  const handleTimeChange = (e) => {
    const value = Math.max(5, Math.min(120, Number(e.target.value))); // Entre 5 et 120 sec
    setLocalTimeLimit(value);
    setTimeLimit(value);
  };

  const handleWordCountChange = (e) => {
    const value = Math.max(1, Math.min(100, Number(e.target.value))); // Entre 1 et 100 mots
    setLocalWordCount(value);
    setWordCount(value);
  };

  return (
    <div className="mode-container">
      <label>mode :</label>
      <select value={selectedMode} onChange={handleModeChange}>
        <option value="words">words</option>
        <option value="time">time</option>
        <option value="custom">custom</option>
      </select>

      {selectedMode === "words" && (
        <div className="word-mode margin__left-2rem ">
          <label>words :</label>
          <input
            type="number"
            min="1"
            max="100"
            value={wordCount}
            onChange={handleWordCountChange}
          />
        </div>
      )}

      {selectedMode === "time" && (
        <div className="time-mode margin__left-2rem ">
          <label>secondes :</label>
          <input
            type="number"
            min="5"
            max="120"
            value={timeLimit}
            onChange={handleTimeChange}
          />
        </div>
      )}

      {selectedMode === "custom" && (
        <div className="custom-mode margin__left-2rem ">
          <label>custom text :</label>
          <textarea
            value={customInput}
            onChange={handleCustomTextChange}
            placeholder="your text..."
          />
        </div>
      )}
    </div>
  );
};

export default Mode;
