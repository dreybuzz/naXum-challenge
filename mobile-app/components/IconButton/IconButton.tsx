import { View, Pressable, StyleSheet, StyleProp, TextStyle } from "react-native"
import CustomText from "../CustomText/CustomText"
import { COLORS } from "../../utils/colors"

type IconButtonProps = {
  icon: React.ReactNode
  label?: string
  labelStyle?: StyleProp<TextStyle>
  backgroundColor?: string
  size?: string
  pressHandler?: () => void
}
export default function IconButton({
  icon,
  label,
  labelStyle,
  backgroundColor,
  size,
  pressHandler = () => {},
}: IconButtonProps) {
  return (
    <Pressable style={[styles.container]} onPress={pressHandler}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: backgroundColor ?? COLORS.accent,
            width: `${size ?? "40"}%`,
          },
        ]}>
        {icon}
      </View>
      {label && (
        <CustomText style={[styles.label, labelStyle]}>{label}</CustomText>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    aspectRatio: 1,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    marginTop: 5,
  },
})
