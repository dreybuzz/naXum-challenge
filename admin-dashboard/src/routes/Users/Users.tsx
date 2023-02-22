import { useState, useContext, useMemo, useEffect } from "react"
import FormInput from "../../components/FormInput/FormInput"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import Table from "../../components/Table/Table"
import UserForm from "../../components/UserForm/UserForm"
import { ModalContext } from "../../contexts/ModalContext"
import { DemoUsers } from "../../data/data"
import { v4 as uuidv4 } from "uuid"
import { IUser } from "../../utils/interfaces"
import { DataContext } from "../../contexts/DataContext"

const headers = [
  { title: "Profile Picture" },
  { title: "Username", propKey: "username" },
  { title: "Full Name", propKey: "fullName" },
  { title: "Contact Number", propKey: "contactNumber" },
  { title: "E-Mail", propKey: "email" },
]

export default function Users() {
  const [searchValue, setSearchValue] = useState("")
  const [selectValue, setSelectValue] = useState("auto")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="flex flex-col">
      {/* Search */}
      <div className="p-5 bg-slate-700 mb-10 rounded-md shadow-inner shadow-black flex items-center">
        {/* Search Option */}
        <select
          className="bg-slate-900 p-3 rounded-md"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}>
          <option value={"auto"}>Auto</option>
          {headers
            .filter((header) => header.hasOwnProperty("propKey"))
            .map(({ title, propKey }) => (
              <option key={uuidv4()} value={propKey}>
                {title}
              </option>
            ))}
        </select>

        {/* Search Input */}
        <div className="ml-4">
          <FormInput
            iconTitle="search"
            placeholder="Enter Keyword"
            value={searchValue}
            onChangeHandler={handleInputChange}
          />
        </div>
      </div>

      {/* Table */}
      <UsersTable searchInput={searchValue} propKey={selectValue} />
    </div>
  )
}

type UsersTableProps = {
  searchInput: string
  propKey: string
}
const UsersTable = ({ searchInput, propKey }: UsersTableProps) => {
  const { users } = useContext(DataContext)

  const [filteredUsers, setFilteredUsers] = useState(users)

  const {
    setShown: setModalShown,
    body: modalBody,
    setBody: setModalBoody,
  } = useContext(ModalContext)

  const parseTableData = (users: IUser[]) => {
    return users.map((user) => {
      const { username, name, mobile_number, email } = user
      return {
        clickFunc: () => {
          setModalBoody(
            <div className="bg-slate-800 rounded-md">
              <UserForm
                showUpdateButton
                showDeleteButton
                showAddButton={false}
                user={user}
              />
            </div>
          )
          setModalShown(true)
        },
        data: [<ProfilePicture />, username, name, mobile_number, email],
      }
    })
  }

  const filterTableData = (searchInput: string, propKey: string) => {
    return users.filter((user) => {
      const userValues = Object.values(user)
      const output =
        propKey === "auto"
          ? JSON.stringify(userValues)
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          : user[propKey as keyof typeof user]
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
      return output
    })
  }

  const [tableData, setTableData] = useState(() => parseTableData(users))

  useEffect(() => {
    searchInput.length &&
      setTableData(() => {
        const filteredUsers = filterTableData(searchInput, propKey)
        return parseTableData(filteredUsers)
      })
  }, [searchInput, propKey])

  return (
    <Table
      headers={headers.map(({ title }) => (
        <TableHeader title={title} />
      ))}
      data={tableData}
    />
  )
}

type TableHeaderProps = {
  title: string
}
const TableHeader = ({ title }: TableHeaderProps) => {
  return <div className="interactive">{title}</div>
}
