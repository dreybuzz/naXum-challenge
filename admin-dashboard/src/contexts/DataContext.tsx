import { createContext } from "react"
import { IUser } from "../utils/interfaces"

type DataContextValues = {
  users: IUser[]
}

export const DataContext = createContext({} as DataContextValues)
