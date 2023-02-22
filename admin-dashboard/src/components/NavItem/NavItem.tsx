import React from "react"
import { Link } from "react-router-dom"
import { INavItem } from "../../utils/interfaces"

export default function NavItem({ title, iconTitle, link }: INavItem) {
  return (
    <Link to={link || ""}>
      <div className="interactive hover:p-2 flex justify-between items-center text-sm">
        <span className="material-symbols-outlined">{iconTitle}</span>
        <h4>{title}</h4>
      </div>
    </Link>
  )
}
