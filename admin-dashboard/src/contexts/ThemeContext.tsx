import { createContext } from "react"

type ThemeContextValues = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
export const ThemeContext = createContext({} as ThemeContextValues)
