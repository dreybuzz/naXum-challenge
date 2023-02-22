import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App"
import Users from "./routes/Users/Users"
import AddUser from "./routes/AddUser/AddUser"
import UserContacts from "./routes/UserContacts/UserContacts"
import { Login } from "./routes/Login/Login"
import AuthProvider from "./providers/AuthProvider/AuthProvider"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "users",
        element: <Users />,
      },

      {
        path: "users/add",
        element: <AddUser />,
      },

      {
        path: "users/contacts",
        element: <UserContacts />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </React.StrictMode>
)
