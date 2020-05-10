import React, { useContext } from 'react'
import Search from './components/Search'
import Path from './components/Path'
import ThemeContext from './context/theme/themeContext'
import ThemeToggler from './components/ThemeToggler'
import LanguageToggler from './components/LanguageToggler'
const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id='app' className={theme}>
      <ThemeToggler />
      <LanguageToggler />
      <Search />
      <Path />
    </div>
  )
}

export default App
