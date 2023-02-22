import { useContext } from "react"
import { useNavigate } from "react-router"
import { v4 as uuidv4 } from "uuid"
import { AuthContext } from "../../contexts/AuthContext"
import { NavSchema } from "../../data/data"
import { INavItem } from "../../utils/interfaces"
import NavItem from "../NavItem/NavItem"

type SideBarProps = {}
export default function SideBar({}: SideBarProps) {
  const { setAuthenticated } = useContext(AuthContext)
  const navigator = useNavigate()
  return (
    <div className="flex flex-col h-full overflow-hidden pr-4">
      <div className="overflow-auto flex-1">
        <NavBar />
      </div>

      <div
        className="mt-10"
        onClick={() => {
          setAuthenticated(false)
          navigator("login")
          localStorage.removeItem("admin_token")
        }}>
        <NavItem title="Logout" iconTitle="logout" />
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="p-3 flex flex-col gap-4">
      {NavSchema.map((nav) => {
        const isNavGroup = nav.hasOwnProperty("groupTitle")
        const output = !isNavGroup ? (
          <NavItem
            key={uuidv4()}
            title={nav.title as string}
            link={nav.link as string}
            iconTitle={nav.iconTitle as string}
          />
        ) : (
          <div key={uuidv4()} className="border-t-2 pt-2 mt-2">
            <NavGroup
              groupTitle={nav?.groupTitle as string}
              navItems={nav?.items ?? []}
            />
          </div>
        )

        return output
      })}
    </div>
  )
}

type NavGroupProps = {
  groupTitle: string
  navItems: INavItem[]
}
const NavGroup = ({ groupTitle, navItems }: NavGroupProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h5 className="text-indigo-100 text-xs">{groupTitle}</h5>
        <div className="flex flex-col gap-6">
          {navItems.map((navItem) => (
            <NavItem key={uuidv4()} {...navItem} />
          ))}
        </div>
      </div>
    </>
  )
}
