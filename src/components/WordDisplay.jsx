import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const WordDisplay = ({ text, userInput }) => {
  const { theme } = useContext(ThemeContext);

  const colors = {
    correct: theme === "light" ? "var(--primary-light)" : "var(--primary-dark)",
    incorrect: "var(--error)",
    base: theme === "light" ? "var(--dark80)" : "var(--light80)",
  };

  return (
    <p>
      {text.split("").map((char, index) => {
        let color = colors.base;

        if (index < userInput.length) {
          color = userInput[index] === char ? colors.correct : colors.incorrect;
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
