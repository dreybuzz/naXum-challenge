import React from "react"
import UserForm from "../../components/UserForm/UserForm"

export default function AddUser() {
  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center">
      <div className="w-2/3 xl:w-1/3">
        <UserForm />
      </div>
    </div>
  )
}
