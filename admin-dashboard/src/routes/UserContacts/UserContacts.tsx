import { useContext, useEffect, useState } from "react"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import Table from "../../components/Table/Table"
import { DataContext } from "../../contexts/DataContext"
import { makeAPIRequest } from "../../utils/helpers"
import { IContact, IUser } from "../../utils/interfaces"

export default function UserContacts() {
  const { users } = useContext(DataContext)

  const [userID, setUserID] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      users.length > 0 && setUserID(users[0].id.toString())
    })()
  }, [users])

  return (
    <div className="flex flex-wrap h-full w-full gap-y-6 md:gap-x-4">
      {/* Users */}
      <div className="basis-full max-h-[50%] lg:max-h-full lg:basis-1/2 bg-slate-700 rounded-md overflow-auto">
        <UsersList users={users} changeUserFunc={setUserID} />
      </div>

      {/* Contacts */}
      <div className="h-full bg-slate-900 grow rounded-md shadow-inner shadow-black overflow-auto">
        <UserContactList userID={userID} />
      </div>
    </div>
  )
}

type UsersListProps = {
  users: IUser[]
  changeUserFunc: (id: string) => void
}
const UsersList = ({ users, changeUserFunc }: UsersListProps) => {
  return (
    <div className="flex flex-col">
      {users.map((user) => {
        const { id, username, name, email } = user

        return (
          <div
            key={id}
            onClick={() => changeUserFunc(id.toString())}
            className="bg-slate-800 p-4 m-6 rounded-md shadow-black shadow-lg flex items-center interactive">
            <ProfilePicture />
            <div className="ml-4 text-xs">
              <span>{name}</span>
              <hr className="my-1" />
              <span>
                {username} | {email}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

type UserContactListProps = {
  userID: string | null
}
const UserContactList = ({ userID }: UserContactListProps) => {
  const [contacts, setContacts] = useState<IContact[]>([])
  useEffect(() => {
    userID &&
      (async () => {
        const { status, data } = await makeAPIRequest({
          endpoint: `contacts/${userID}`,
        })
        console.log(data)
        data && setContacts(() => data)
      })()
  }, [userID])
  const headers = ["Mobile Number", "First Name", "Last Name", "E-Mail"]
  return (
    <Table
      headers={headers}
      data={contacts.map((contact) => {
        const { first_name, last_name, mobile_number, email } = contact
        return {
          clickFunc: () => {},
          data: [mobile_number, first_name, last_name, email],
        }
      })}
    />
  )
}

const UserContactCard = () => {
  return <div></div>
}
