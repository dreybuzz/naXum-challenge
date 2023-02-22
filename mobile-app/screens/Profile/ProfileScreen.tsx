import { View, StyleSheet } from "react-native"
import UserForm from "../../components/UserForm/UserForm"

export default function ProfileScreen() {
  return (
    <View style={[styles.container]}>
      <UserForm buttonText="Update Profile" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
