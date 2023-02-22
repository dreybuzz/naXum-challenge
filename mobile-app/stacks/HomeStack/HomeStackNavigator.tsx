import { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ThemeContext } from "../../contexts/ThemeContext"
import AddContactScreen from "../../screens/AddContact/AddContactScreen"
import HomeScreen from "../../screens/Home/HomeScreen"
import { COLORS } from "../../utils/colors"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

export default function HomeStackNavigator() {
  const { themeColors } = useContext(ThemeContext)
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: COLORS.accent,
        },
        headerTitleStyle: {
          color: themeColors.primary,
        },
        headerRight: () => (
          <Entypo
            name="menu"
            size={24}
            color={themeColors.primary}
            style={{ marginRight: 5 }}
            onPress={navigation.toggleDrawer}
          />
        ),
        headerBackTitle: "",
        headerLeft: () =>
          route.name !== "/" && (
            <Ionicons
              onPress={() => navigation.goBack()}
              name="caret-back"
              size={24}
              color={themeColors.primary}
              style={{}}
            />
          ),
      })}>
      <Stack.Screen
        name="/"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="Add Contact"
        component={AddContactScreen}
        options={{}}
      />
    </Stack.Navigator>
  )
}
