import { View, Text, StyleSheet } from "react-native"
import { useContext, useState, useRef } from "react"
import Button from "../../components/Button/Button"
import FormInput from "../../components/FormInput/FormInput"
import { globalStyles } from "../../utils/globalStyles"
import { Entypo } from "@expo/vector-icons"
import { AuthContext } from "../../contexts/AuthContext"
import { BASE_API_URL } from "../../utils/helpers"
import axios from "axios"

export default function LoginScreen({}) {
  const { authenticated, setAuthenticated } = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [token, setToken] = useState(null)

  async function loginHandler() {
    try {
      try {
        const formData = new FormData()
        formData.append("username", username)
        formData.append("password", password)

        const loginRequest = await axios.post(BASE_API_URL + "login", {
          method: "post",
          body: formData,
          headers: {
            Accept: "application/vnd.api+json",
          },
        })
        const response = loginRequest.data

        // if (status === 200) {
        //   // localStorage.setItem("admin_token", result.token)
        //   setAuthenticated(true)
        //   // navigator("/")
        // }

        console.log(response)
      } catch (e) {
        alert("Invalid Credentials")
        console.log(e)
      }
    } catch (e) {}
  }

  return (
    <View style={[styles.container]}>
      {/* Inputs */}
      <View style={[styles.inputsContainer]}>
        <View style={[styles.inputContainer]}>
          <FormInput
            placeholder="Username"
            icon={<Entypo name="user" size={24} color="black" />}
            value={username}
            valueHandler={setUsername}
          />
        </View>

        <View style={[styles.inputContainer]}>
          <FormInput
            placeholder="Password"
            icon={<Entypo name="lock" size={24} color="black" />}
            value={password}
            valueHandler={setPassword}
          />
        </View>
      </View>

      {/* Button */}
      <View style={[styles.loginButtonContainer]}>
        <Button text="Login" pressHandler={loginHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    // ...globalStyles.debug,
  },

  inputsContainer: {
    width: "100%",
    // flexDirection: "column",
    // ...globalStyles.debug,
  },

  inputContainer: {
    marginBottom: 50,
    height: 40,
  },

  loginButtonContainer: {
    // height: "fit",
    // marginTop: 40,
    // marginHorizontal: 10,
    height: 40,
  },
})
