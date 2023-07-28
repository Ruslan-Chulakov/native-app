// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import backgroundImageRef from './img/PhotoBG.png';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={backgroundImageRef} style={styles.backgroundImage}>
      <View style={styles.container}>
        <LoginScreen />
        {/* <RegistrationScreen /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
