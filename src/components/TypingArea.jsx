const TypingArea = ({ userInput, setUserInput, isDisabled }) => {
  const handleChange = (e) => {
    if (!isDisabled) {
      setUserInput(e.target.value);
    }
  };

  return (
    <textarea
      type="text"
      className="typing-input"
      value={userInput}
      onChange={handleChange}
      disabled={isDisabled}
    />
  );
};

export default TypingArea;
