import { View, Text, Pressable, StyleSheet } from "react-native"
import { useContext } from "react"
import { COLORS } from "../../utils/colors"
import { ThemeContext } from "../../contexts/ThemeContext"
import { globalStyles } from "../../utils/globalStyles"
import CustomText from "../CustomText/CustomText"

type ButtonProPs = {
  text: string
  pressHandler?: () => void
}
export default function Button({ text, pressHandler = () => {} }: ButtonProPs) {
  const { isDarkMode, themeColors } = useContext(ThemeContext)

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button]} onPress={pressHandler}>
        <CustomText style={[styles.text, { color: themeColors.primary }]}>
          {text}
        </CustomText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.accent,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },

  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    textTransform: "uppercase",
    // ...globalStyles.debug,
  },
})
