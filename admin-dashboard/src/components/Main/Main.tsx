import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Main({}) {
  const { pathname } = useLocation()
  return (
    <div className="w-full h-full overflow-auto">
      {pathname === "/" ? <>Dashboard</> : <Outlet />}
    </div>
  )
}
