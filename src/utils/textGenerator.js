const words = [
    "chat", "chien", "souris", "voiture", "maison", "ordinateur", "internet", "musique", "écran", "clavier"
  ];
  
  export const generateText = (wordCount = 10) => {
    return Array.from({ length: wordCount }, () => 
      words[Math.floor(Math.random() * words.length)]
    ).join(" ");
  };
  