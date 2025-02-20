const Stats = ({ text, userInput, time }) => {
  const wordsTyped = userInput.trim().split(" ").length;
  const correctChars = userInput
    .split("")
    .filter((char, i) => char === text[i]).length;
  const totalChars = userInput.length;

  const wpm = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
  const accuracy =
    totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

  return (
    <div>
      <p>⚡ WPM : {wpm}</p>
      <p>🎯 Précision : {accuracy}%</p>
    </div>
  );
};

export default Stats;
