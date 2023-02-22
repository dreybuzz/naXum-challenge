import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import DrawerNavigator from "../Drawer/DrawerNavigator"
import AuthStack from "../AuthStack/AuthStack"

export default function MainStack() {
  const { authenticated } = useContext(AuthContext)

  if (authenticated) {
    return <DrawerNavigator />
  }

  return <AuthStack />
}
