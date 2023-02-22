import { useRef, useState, useContext, useLayoutEffect } from "react"
import Spinner from "../../components/Spinner/Spinner"
import { AuthContext } from "../../contexts/AuthContext"
import { BASE_API_URL } from "../../utils/helpers"

import { useNavigate } from "react-router-dom"

export function Login({}) {
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const navigator = useNavigate()

  useLayoutEffect(() => {
    authenticated && navigator("/")
  }, [authenticated])

  const [busy, setBusy] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)

    try {
      const formData = new FormData(formRef.current as HTMLFormElement)
      const username = formData.get("username") as string
      const password = formData.get("password") as string

      const data = new FormData()
      data.append("username", username)
      data.append("password", password)

      const loginRequest = await fetch(BASE_API_URL + "admin-login", {
        method: "post",
        body: data,
        headers: {
          Accept: "application/vnd.api+json",
        },
      })

      const { status, statusText } = loginRequest

      //   console.log(status, statusText)

      const result = await loginRequest.json()
      //   const token = result.data.token
      console.log(result)

      if (status === 200) {
        localStorage.setItem("admin_token", result.token)
        setAuthenticated(true)
        navigator("/")
      }

      console.log(result)
    } catch (e) {
      alert("Invalid Credentials")
      console.log(e)
    }

    setBusy(false)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler} ref={formRef}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-200 hover:text-indigo-100">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="group-hover:text-indigo-400">
                {!busy ? <span>Sign in</span> : <Spinner />}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
