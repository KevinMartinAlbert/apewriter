const WordDisplay = ({ text, userInput }) => {
  return (
    <p className="type__and__display">
      {text.split("").map((char, index) => {
        let color = "black";
        if (index < userInput.length) {
          color = userInput[index] === char ? "#0481EB" : "#D21404";
        }

        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default WordDisplay;
