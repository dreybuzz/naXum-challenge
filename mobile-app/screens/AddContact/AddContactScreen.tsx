import { View, StyleSheet } from "react-native"
import { useContext } from "react"
import UserForm from "../../components/UserForm/UserForm"

export default function AddContactScreen() {
  return (
    <View style={[styles.container]}>
      <UserForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
