import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";

const LoginScreen = () => {
    return (
      <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
        />
        <View>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={styles.showPasswordLink}>
            <Text style={styles.showPasswordText}>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.textButton}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noAccountLink}>
          <Text style={styles.registrationLinkText}>Немає акаунту?</Text>
          <Text style={[styles.registrationLinkText, styles.registrationLink]}>
            Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  form: {
    position: "relative",
    paddingBottom: 80,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 30,
    fontFamily: "RobotoMedium",
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  passwordInput: {
    marginBottom: 43,
    position: "relative",
  },
  showPasswordLink: {
    position: "absolute",
    top: 20,
    left: "75%",
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    color: "black",
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
  },
  noAccountLink: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  registrationLinkText: {
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
  registrationLink: {
    textDecorationLine: 'underline',
  }
});

export default LoginScreen;
