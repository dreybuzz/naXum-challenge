import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import UserForm from "../UserForm/UserForm"

type ModalProps = {
  title: React.ReactNode
  body: React.ReactNode
}
export default function Modal() {
  const { shown, setShown, backdrop, body } = useContext(ModalContext)
  return (
    <div
      onClick={(e) => {
        e.target === e.currentTarget && backdrop && setShown(false)
      }}
      className={`absolute bg-black/50 flex justify-center items-center ${
        shown ? "w-full h-full" : "w-0 h-0 overflow-hidden"
      }`}>
      {/* <UserForm /> */}
      {body}
    </div>
  )
}
