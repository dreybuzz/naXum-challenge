import { useState } from "react"
import { BASE_API_URL } from "../../utils/helpers"
import { IUser } from "../../utils/interfaces"
import Button from "../Button/Button"
import FormInput from "../FormInput/FormInput"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

type UserFormProps = {
  showAddButton?: boolean
  showUpdateButton?: boolean
  showDeleteButton?: boolean
  user?: IUser
}
export default function UserForm({
  showAddButton = true,
  showUpdateButton = false,
  showDeleteButton = false,
  user = {} as IUser,
}: UserFormProps) {
  const { username, name, mobile_number, email } = user

  const [usernameInputValue, setUsernameInputValue] = useState("")
  const [passwordInputValue, setPasswordInputValue] = useState("")
  const [fullNameInputValue, setFullNameInputValue] = useState("")
  const [contactNumberInputValue, setContactNumberinputValue] = useState("")
  const [emailInputValue, setEmailInputValue] = useState("")

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("username", usernameInputValue)
    formData.append("password", passwordInputValue)
    formData.append("name", fullNameInputValue)
    formData.append("mobile_number", contactNumberInputValue)
    formData.append("email", emailInputValue)

    try {
      const token = localStorage.getItem("admin_token")
      const addUserRequest = await fetch(BASE_API_URL + "register", {
        method: "post",
        body: formData,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${token}`,
        },
      })

      const { status, statusText } = addUserRequest
      if (status === 201) {
        alert("User Added Successfully")
      } else {
        throw Error("")
      }
    } catch (e) {
      alert("Error Adding User")
    }

    setUsernameInputValue("")
    setPasswordInputValue("")
    setFullNameInputValue("")
    setContactNumberinputValue("")
    setEmailInputValue("")
  }

  return (
    <div className="h-full w-full  rounded-md shadow-inner shadow-black px-10 py-20 flex flex-col items-center">
      <form onSubmit={submitHandler}>
        {/* Profile Picture */}
        <div className="flex justify-center items-center">
          <ProfilePicture />
        </div>

        {/* Form Inputs */}
        <div className="mt-10 flex flex-col gap-10">
          <FormInput
            iconTitle="person"
            placeholder="Username"
            value={username ?? usernameInputValue}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsernameInputValue(e.target.value)
            }
            required
          />

          <FormInput
            iconTitle="person"
            placeholder="Password"
            value={passwordInputValue}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordInputValue(e.target.value)
            }
            required
            type="password"
          />

          <FormInput
            iconTitle="contact_mail"
            placeholder="Full Name"
            value={name ?? fullNameInputValue}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullNameInputValue(e.target.value)
            }
            required
          />
          <FormInput
            iconTitle="phone"
            placeholder="Contact Number"
            value={mobile_number ?? contactNumberInputValue}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setContactNumberinputValue(e.target.value)
            }
            required
          />
          <FormInput
            iconTitle="mail"
            placeholder="E-Mail"
            type="email"
            value={email ?? emailInputValue}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailInputValue(e.target.value)
            }
            required
          />
        </div>

        {/* Form Buttons */}
        <div className="flex flex-wrap justify-around items-center mt-10 gap-4">
          {showAddButton && <AddUserButton />}
          {showUpdateButton && <UpdateUserButton />}
          {showDeleteButton && <DeleteUser />}
        </div>
      </form>
    </div>
  )
}

const AddUserButton = () => {
  return <Button iconTitle="add" text="Add User" variant="primary" />
}

const UpdateUserButton = () => {
  return <Button iconTitle="person" text="Update User" variant="info" />
}

const DeleteUser = () => {
  return <Button iconTitle="remove" text="Delete User" variant="danger" />
}
