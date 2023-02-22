export interface INavItem {
  title: string
  iconTitle: string
  link?: string
}

export interface INavGroup {
  title: string
  items: INavItem[]
}

export interface IUser {
  id: number
  username: string
  name: string
  mobile_number: string
  email: string
}

export interface IContact {
  first_name: string
  last_name: string
  mobile_number: string
  email?: string
}
