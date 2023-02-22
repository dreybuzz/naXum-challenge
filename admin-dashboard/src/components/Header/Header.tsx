import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function Header({}) {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
  return (
    <header className="flex border-b-4 justify-between items-center">
      {/* Logo */}
      <div className="p-4 flex-1 ">
        <img
          src={"./../../assets/images/logo.png"}
          className={`object-contain sm:w-16 md:w-24 lg:w-32 ${
            !isDarkMode && "invert"
          }`}
        />
      </div>

      {/* Title */}
      <div className="flex-1 flex justify-center">
        <h1 className="font-semibold xl:text-2xl">Admin Dashboard</h1>
      </div>

      {/* Settings */}
      <div className="hidden flex-1 lg:flex justify-end p-4">
        <span
          className="material-symbols-outlined interactive"
          onClick={() => setIsDarkMode(!isDarkMode)}>
          nightlight_badge
        </span>
      </div>

      <div className="lg:hidden flex-1 flex justify-end p-4">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  )
}
