import { useLayoutEffect, useState, useContext } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Modal from "./components/Modal/Modal"
import SideBar from "./components/SideBar/SideBar"
import { AuthContext } from "./contexts/AuthContext"
import DataProvider from "./providers/DataProvider/DataProvider"
import ModalProvider from "./providers/ModalProvider/ModalProvider"
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider"
import { Login } from "./routes/Login/Login"
import { verifyTokenWithApi } from "./utils/helpers"

export default function App() {
  // const [authenticated, setAuthenticated] = useState(false)

  // useLayoutEffect(() => {
  //   ;(async () => {
  //     const authenticated = await verifyTokenWithApi()
  //     setAuthenticated(() => authenticated)
  //   })()
  // }, [])

  const { authenticated } = useContext(AuthContext)

  if (!authenticated) {
    return <Login />
  }

  return (
    <ThemeProvider>
      <DataProvider>
        <ModalProvider>
          <div className="bg-neutral-300 dark:bg-gray-900 dark:text-white w-full h-full ease-in-out duration-500 flex flex-col relative">
            <Header />
            {/* Sidebar & Main */}
            <div className="flex grow p-1 gap-x-2 flex-wrap h-full overflow-scroll">
              <div className="basis-52 shrink-0 p-4 rounded-md bg-slate-800 shadow-md shadow-black h-full">
                <SideBar />
              </div>
              <div className="grow basis-2/3 p-6 bg-gray-800 shadow-inner rounded-lg overflow-auto h-full">
                <Main />
              </div>
            </div>

            <Modal />
          </div>
        </ModalProvider>
      </DataProvider>
    </ThemeProvider>
  )
}
