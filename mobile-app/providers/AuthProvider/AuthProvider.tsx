import { useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

type AuthProviderProps = {
  children: React.ReactNode
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(true)
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
