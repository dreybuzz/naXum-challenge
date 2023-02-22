import { useLayoutEffect, useState } from "react"
import { DataContext } from "../../contexts/DataContext"
import { makeAPIRequest, verifyTokenWithApi } from "../../utils/helpers"
import { IUser } from "../../utils/interfaces"

type DataProviderProps = {
  children: React.ReactNode
}
export default function DataProvider({ children }: DataProviderProps) {
  const [users, setUsers] = useState<IUser[]>([])

  useLayoutEffect(() => {
    ;(async () => {
      const { status, data } = await makeAPIRequest({ endpoint: "users" })
      status === 200 && setUsers(() => data)
      console.log(data)
    })()
  }, [])

  return (
    <DataContext.Provider
      value={{
        users,
      }}>
      {children}
    </DataContext.Provider>
  )
}
