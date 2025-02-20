const TypingArea = ({ userInput, setUserInput }) => {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      placeholder="Commence à taper..."
      autoFocus
      className="typing-input"
    />
  );
};

export default TypingArea;
