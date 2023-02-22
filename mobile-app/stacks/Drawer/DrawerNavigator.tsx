import { useState, useContext } from "react"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer"
import { ThemeContext } from "../../contexts/ThemeContext"
import { COLORS } from "../../utils/colors"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import ProfileScreen from "../../screens/Profile/ProfileScreen"
import LogoutScreen from "../../screens/Logout/LogoutScreen"
import HomeStackNavigator from "../HomeStack/HomeStackNavigator"
import { MaterialIcons } from "@expo/vector-icons"
import { View, StyleSheet } from "react-native"
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types"
import { AntDesign } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import CustomText from "../../components/CustomText/CustomText"
import { globalStyles } from "../../utils/globalStyles"

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  const { themeColors } = useContext(ThemeContext)
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerStyle: { backgroundColor: COLORS.accent },
          headerTitleStyle: { color: themeColors.primary },
          headerTitleAlign: "center",
          drawerPosition: "right",
          headerRight: (props) => (
            <Entypo
              name="menu"
              size={24}
              color={themeColors.primary}
              style={{ marginRight: 5 }}
              onPress={navigation.toggleDrawer}
            />
          ),
          headerLeft: () => <></>,
        }
      }}
      drawerContent={({ navigation }) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              onPress={() => navigation.goBack()}
              name="caret-back"
              size={24}
              color={themeColors.primary}
              style={{ marginLeft: 5 }}
            />
          ),
          // headerRight: () => <></>,
        })}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  )
}

type DrawerContentProps = {
  navigation: DrawerNavigationHelpers
}
const DrawerContent = ({ navigation }: DrawerContentProps) => {
  const { themeColors } = useContext(ThemeContext)

  return (
    <>
      <DrawerContentScrollView>
        {/* Profile Picture */}
        <View style={[styles.profilePictureContainer]}>
          <MaterialIcons
            name="account-circle"
            size={150}
            color={themeColors.secondary}
          />
        </View>

        {/* Divider */}
        <View style={[styles.divider]}></View>

        {/* Profile */}
        <DrawerContentMenuItem
          icon={<Entypo name="lock" size={24} color={themeColors.secondary} />}
          title="Profile"
          // pressHandler={() => navigation.navigate("Logout")}
          children={[
            {
              icon: (
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={20}
                  color={themeColors.secondary}
                />
              ),
              title: "My Profile",
              pressHandler: () => navigation.navigate("Profile"),
            },
          ]}
        />

        {/* Logout */}
        <DrawerContentMenuItem
          icon={
            <AntDesign name="logout" size={24} color={themeColors.secondary} />
          }
          title="Logout"
          pressHandler={() => navigation.navigate("Logout")}
        />
      </DrawerContentScrollView>
    </>
  )
}

type DrawerContentMenuItemPropsBase = {
  icon?: React.ReactNode
  title: string
  pressHandler?: () => void
}

type DrawerContentMenuItemProps = DrawerContentMenuItemPropsBase & {
  children?: DrawerContentMenuItemPropsBase[]
}

const DrawerContentMenuItem = ({
  icon,
  title,
  children,
  pressHandler,
}: DrawerContentMenuItemProps) => {
  const [childrenShown, setChildrenShown] = useState(false)
  return (
    <>
      {/* Parent */}
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            marginBottom: 10,
          },
        ]}>
        <DrawerItem
          style={[{ flex: 1 }]}
          label={() => <CustomText>{title}</CustomText>}
          labelStyle={{ fontSize: 20 }}
          onPress={() => {
            if (children) {
              setChildrenShown(() => !childrenShown)
            } else {
              pressHandler && pressHandler()
            }
          }}
          icon={() => icon}
        />
        {children && (
          <AntDesign
            name={childrenShown ? "up" : "down"}
            size={16}
            color="black"
          />
        )}
      </View>

      {/* Children */}
      {children && childrenShown && (
        <View style={[{ marginLeft: 20 }]}>
          {children.map((child) => (
            <DrawerContentMenuItem {...child} />
          ))}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profilePictureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // ...globalStyles.debug,
  },

  divider: {
    marginTop: 50,
    marginBottom: 30,
    borderWidth: 2,
    marginHorizontal: 20,
  },
})

const menuItemStyles = StyleSheet.create({})
