import React, { useEffect, useState } from "react"
import { ModalContext } from "../../contexts/ModalContext"

type ModalProviderProps = {
  children: React.ReactNode
}
export default function ModalProvider({ children }: ModalProviderProps) {
  const [shown, setShown] = useState(false)
  const [header, setHeader] = useState(<></>)
  const [body, setBody] = useState(<></>)
  const [fullScreen, setFullScreen] = useState(true)
  const [backdrop, setBackdrop] = useState(true)

  return (
    <ModalContext.Provider
      value={{
        shown,
        setShown,
        header,
        setHeader,
        body,
        setBody,
        fullScreen,
        setFullScreen,
        backdrop,
        setBackdrop,
      }}>
      {children}
    </ModalContext.Provider>
  )
}
