import { View, Text, StyleSheet, TextInput } from "react-native"
import { useContext } from "react"
import { globalStyles } from "../../utils/globalStyles"
import { ThemeContext } from "../../contexts/ThemeContext"
import { COLORS } from "../../utils/colors"

type FormInputProps = {
  icon?: React.ReactNode
  placeholder?: string
  fullBorder?: boolean
  value?: string
  valueHandler?: (val: string) => void
}
export default function FormInput({
  icon,
  placeholder,
  fullBorder = false,
  value,
  valueHandler,
}: FormInputProps) {
  const { themeColors } = useContext(ThemeContext)
  const fullBorderStyle = {
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRightColor: themeColors.secondary,
    borderRadius: 5,
    padding: 5,
  }
  return (
    <View style={[styles.container, fullBorder && fullBorderStyle]}>
      {icon && <View style={[styles.iconContainer]}>{icon}</View>}
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? "Enter Value"}
        placeholderTextColor={COLORS.accent}
        value={value || ""}
        onChangeText={(val) => {
          valueHandler && valueHandler(val)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    fontWeight: "bold",
  },

  iconContainer: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontFamily: "Ubuntu",
  },
})
