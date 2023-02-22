import "react-native-gesture-handler"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider"
import AuthProvider from "./providers/AuthProvider/AuthProvider"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"
import MainStack from "./stacks/MainStack/MainStack"
import { StatusBar } from "expo-status-bar"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu: require("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <View onLayout={onLayoutRootView} style={[{ flex: 1 }]}>
            <StatusBar />
            <MainStack />
          </View>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
