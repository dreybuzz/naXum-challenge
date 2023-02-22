import { createContext } from "react"

type ThemeColors = {
  accent?: string
  primary: string
  secondary: string
}
type ThemeContextValues = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  themeColors: ThemeColors
}
export const ThemeContext = createContext({} as ThemeContextValues)
