import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode"

const Navbar = props => {

  const { updateDarkMode } = props

  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
    updateDarkMode();
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
