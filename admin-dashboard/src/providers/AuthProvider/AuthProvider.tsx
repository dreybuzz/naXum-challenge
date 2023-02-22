import { useLayoutEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { verifyTokenWithApi } from "../../utils/helpers"

type AuthProviderProps = {
  children: React.ReactNode
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false)

  useLayoutEffect(() => {
    ;(async () => {
      const authenticated = await verifyTokenWithApi()
      setAuthenticated(() => authenticated)
    })()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
