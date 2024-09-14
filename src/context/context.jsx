import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({tema: 'claro'})

  const toggleTheme = () => {
    if (theme.tema === 'claro') {
      setTheme({...theme, tema: 'escuro'})
    } else if (theme.tema === 'escuro') {
      console.log({...theme, tema: 'escuro'})
      setTheme({...theme, tema: 'claro'})
    }
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const context = useContext(ThemeContext)
  return context
} 
