const TypingArea = ({ userInput, setUserInput, isDisabled }) => {
  const handleChange = (e) => {
    if (!isDisabled) {
      setUserInput(e.target.value);
    }
  };

  return (
    <input
      type="text"
      className="typing-input"
      value={userInput}
      onChange={handleChange}
      disabled={isDisabled} // Désactive l'input si isDisabled est true
    />
  );
};

export default TypingArea;
