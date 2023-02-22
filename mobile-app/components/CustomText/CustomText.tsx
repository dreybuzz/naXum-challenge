import { StyleSheet, Text, StyleProp, TextStyle } from "react-native"
import React from "react"

type CustomTextProps = {
  style?: StyleProp<TextStyle>
  children: string
  text?: string
}
export default function CustomText({ style, children, text }: CustomTextProps) {
  return <Text style={[styles.text, style]}>{children ?? text}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu",
  },
})
