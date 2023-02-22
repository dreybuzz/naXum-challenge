import { View, Pressable, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { globalStyles } from "../../utils/globalStyles"
import Button from "../../components/Button/Button"
import CustomText from "../../components/CustomText/CustomText"
import { COLORS } from "../../utils/colors"
import FormInput from "../../components/FormInput/FormInput"
import { IPerson } from "../../utils/interfaces"

type UserFormProps = {
  user?: IPerson
  buttonText?: string
}
export default function UserForm({
  user,
  buttonText = user ? "Update Profile" : "Add Contact",
}: UserFormProps) {
  const { themeColors } = useContext(ThemeContext)

  return (
    <View style={[styles.container]}>
      {/* Profile Picture */}
      <View style={[styles.profilePictureContainer]}>
        <MaterialIcons
          name="account-circle"
          size={150}
          color={themeColors.secondary}
        />
      </View>

      {/* Top Badges */}
      <View style={[styles.topBadgesContainer]}>
        <Button text="Top Badges" />
      </View>

      {/* Tabs */}
      <View style={[styles.tabsContainer, { borderColor: COLORS.accent }]}>
        <Pressable
          style={[
            styles.tabContainer,
            { backgroundColor: COLORS.accent, borderColor: COLORS.accent },
          ]}>
          <CustomText style={[{ color: themeColors.primary }]}>
            Profile
          </CustomText>
        </Pressable>

        <Pressable
          style={[styles.tabContainer, { borderColor: COLORS.accent }]}>
          <CustomText>Social</CustomText>
        </Pressable>

        <Pressable style={[styles.tabContainer, { borderRightWidth: 0 }]}>
          <CustomText>Links</CustomText>
        </Pressable>
      </View>

      {/* Form Inputs */}
      <View style={[styles.inputsContainer]}>
        <View style={[styles.inputContainer]}>
          <FormInput placeholder="First Name" />
        </View>

        <View style={[styles.inputContainer]}>
          <FormInput placeholder="Last Name" />
        </View>

        <View style={[styles.inputContainer]}>
          <FormInput placeholder="Mobile Number" />
        </View>

        <View style={[styles.inputContainer]}>
          <FormInput placeholder="Email" />
        </View>
      </View>

      {/* Form Button */}
      <View style={[styles.buttonContainer]}>
        <Button text={buttonText} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  profilePictureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // ...globalStyles.debug,
  },

  topBadgesContainer: {
    marginTop: 20,
    height: 40,
  },

  tabsContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
  },

  tabContainer: {
    borderRightWidth: 2,
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  inputsContainer: {
    marginTop: 20,
  },

  inputContainer: {
    height: 40,
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 20,
    height: 40,
  },
})
