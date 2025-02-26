import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>ApeWriter</h1>
      <button onClick={toggleTheme} className="margin__left-2rem">
        Switch theme
      </button>
    </header>
  );
}

export default Header;
