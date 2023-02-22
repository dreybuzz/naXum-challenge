import * as SecureStore from "expo-secure-store"

export const BASE_API_URL = `http://localhost:8000/api/`

export interface IPerson {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
}

export function generateRandomData(numObjects: number): IPerson[] {
  const firstNames: string[] = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Gina",
    "Henry",
    "Isabel",
    "Jake",
  ]
  const lastNames: string[] = [
    "Smith",
    "Johnson",
    "Brown",
    "Garcia",
    "Miller",
    "Davis",
    "Wilson",
    "Taylor",
    "Clark",
    "Lee",
  ]
  const domains: string[] = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
  ]
  const data: IPerson[] = []
  for (let i = 0; i < numObjects; i++) {
    const firstName: string =
      firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName: string =
      lastNames[Math.floor(Math.random() * lastNames.length)]
    const domain: string = domains[Math.floor(Math.random() * domains.length)]
    const email: string = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`
    const mobileNumber: string = `+1${Math.floor(Math.random() * 10000000000)
      .toString()
      .padStart(10, "0")}`
    data.push({ firstName, lastName, email, mobileNumber })
  }
  return data
}

type MakeAPIRequestParams = {
  endpoint: string
  method?: "get" | "post" | "put" | "patch" | "delete"
  requiresAuthentication?: boolean
}
export async function makeAPIRequest({
  endpoint,
  requiresAuthentication = true,
  method = "get",
}: MakeAPIRequestParams) {
  let status, statusText, data

  try {
    let headers: HeadersInit = {
      Accept: "application/vnd.api+json",
    }

    if (requiresAuthentication) {
      const token = localStorage.getItem("admin_token")
      // console.log(token)
      headers.Authorization = `Bearer ${token}`
    }

    let options = {
      method,
      body: data,
      headers,
    }

    const request = await fetch(BASE_API_URL + endpoint, options)
    const result = await request.json()

    status = request.status
    statusText = request.statusText
    data = result

    console.log(result)
  } catch (e) {
    console.log(e)
  }

  return { status, statusText, data }
}

export async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value)
}

export async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key)
  return result
}
