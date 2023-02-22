import React, { useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

type ThemeProviderProps = {
  children: React.ReactNode
}
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const htmlElem = document.documentElement
    isDarkMode
      ? htmlElem.classList.add("dark")
      : htmlElem.classList.remove("dark")
  }, [isDarkMode])
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
