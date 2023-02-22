import { useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { COLORS } from "../../utils/colors"

type ThemeProviderProps = {
  children: React.ReactNode
}
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [themeColors, setThemeColors] = useState(() => {
    const output = COLORS[isDarkMode ? "dark" : "light"]
    return output
  })

  //   console.log(console.log(COLORS["dark"]))

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, themeColors }}>
      {children}
    </ThemeContext.Provider>
  )
}
