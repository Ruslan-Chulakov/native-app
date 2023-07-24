import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AddIcon from "../icons/AddIcon";

const RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <View style={styles.image}>
        <TouchableOpacity style={styles.addBtn}>
          <AddIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.input}
        placeholder="Логін"
        placeholderTextColor="#BDBDBD"
      />
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
        <Text style={styles.textButton}>Зареєстуватися</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.haveAccountLink}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    position: "relative",
    paddingBottom: 80,
    paddingTop: 90,
    paddingRight: 16,
    paddingLeft: 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    top: -60,
    borderRadius: 16,
  },
  addBtn: {
    left: 107,
    top: 80,
  },
  icon: {
    bottom: 40,
    left: "64%",
    position: "absolute",
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
  haveAccountLink: {
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;