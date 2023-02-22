import { createContext } from "react"

type AuthContextValues = {
  authenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext({} as AuthContextValues)
