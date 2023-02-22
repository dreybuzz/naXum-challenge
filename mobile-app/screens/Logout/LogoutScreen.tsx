import { View, StyleSheet } from "react-native"
import React from "react"
import Button from "../../components/Button/Button"
import CustomText from "../../components/CustomText/CustomText"
import { COLORS } from "../../utils/colors"
import { DrawerNavigationProp } from "@react-navigation/drawer"

type LogoutScreenProps = {
  navigation: DrawerNavigationProp<{}>
}
export default function LogoutScreen({ navigation }: LogoutScreenProps) {
  return (
    <View style={[styles.container]}>
      {/* Prompt */}
      <View style={[styles.promptContainer]}>
        <CustomText style={[styles.prompt, { color: COLORS.accent }]}>
          Proceed Sign-out?
        </CustomText>
      </View>
      {/* Buttons */}
      <View style={[styles.buttonsContainer]}>
        <View style={[styles.buttonContainer]}>
          <Button
            text="Yes"
            pressHandler={() => navigation.navigate("Logout" as never)}
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button text="Cancel" pressHandler={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  promptContainer: {
    marginTop: -70,
  },

  prompt: {
    fontSize: 30,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 40,
    marginTop: 40,
  },

  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
})
