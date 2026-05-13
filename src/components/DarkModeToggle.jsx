import React from 'react'

const DarkModeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme" onClick={toggleTheme}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default DarkModeToggle
