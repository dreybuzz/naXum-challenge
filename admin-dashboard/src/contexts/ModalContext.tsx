import { createContext } from "react"

type ModalContextValues = {
  shown: boolean
  setShown: React.Dispatch<React.SetStateAction<boolean>>
  header: React.ReactNode
  setHeader: React.Dispatch<React.SetStateAction<JSX.Element>>
  body: React.ReactNode
  setBody: React.Dispatch<React.SetStateAction<JSX.Element>>
  fullScreen: boolean
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>
  backdrop: boolean
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalContext = createContext({} as ModalContextValues)
