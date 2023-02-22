export const BASE_API_URL = `http://localhost:8000/api/`

export function generateRandomNumber(
  min: number = 1,
  max: number = 100
): number {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  const range = max - min + 1
  const randomNumber = Math.floor(Math.random() * range) + min

  return randomNumber
}

export function generateRandomUsers(count: number = 50) {
  const firstNames = [
    "Aiden",
    "Avery",
    "Benjamin",
    "Caleb",
    "Charlotte",
    "Ella",
    "Emily",
    "Emma",
    "Ethan",
    "Grace",
    "Isabella",
    "Jacob",
    "James",
    "Liam",
    "Lucas",
    "Mason",
    "Mia",
    "Michael",
    "Noah",
    "Oliver",
    "Olivia",
    "Sophia",
    "William",
  ]

  const lastNames = [
    "Anderson",
    "Brown",
    "Clark",
    "Davis",
    "Garcia",
    "Gonzalez",
    "Green",
    "Hall",
    "Harris",
    "Jackson",
    "Johnson",
    "Jones",
    "Lee",
    "Lewis",
    "Martinez",
    "Miller",
    "Moore",
    "Nelson",
    "Perez",
    "Robinson",
    "Rodriguez",
    "Smith",
    "Taylor",
    "Thompson",
    "Walker",
    "White",
    "Williams",
    "Wilson",
    "Wright",
    "Young",
  ]

  const users = []

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const username = `${firstName}${lastName}${Math.floor(Math.random() * 100)}`
    const fullName = `${firstName} ${lastName}`
    const contactNumber = `555-555-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`
    const email = `${username.toLowerCase()}@example.com`
    users.push({ username, fullName, contactNumber, email })
  }

  return users
}

export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

interface Person {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
}

export function generateRandomData(numObjects: number): Person[] {
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
  const data: Person[] = []
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

export async function verifyTokenWithApi() {
  const token = localStorage.getItem("token")
  if (!token) {
    // Token not found in local storage
    return false
  }

  // Make an API call to verify the token using fetch
  try {
    const request = await fetch(BASE_API_URL + "/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const response = await request.json()
    const { status } = response
    return status === 200
  } catch (error) {
    console.error(error)
    return false
  }
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
