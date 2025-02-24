import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
