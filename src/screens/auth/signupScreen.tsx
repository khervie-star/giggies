import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const googleLogo = require("../../assets/logos/icons8-google.svg");
const facebookLogo = require("../../assets/logos/icons8-facebook-circled.svg");
const appleLogo = require("../../assets/logos/icons8-apple-logo.svg");

function SignupScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.hero}>
            <Image
              source={require("../../assets/images/img1.jpg")}
              style={styles.heroImage}
            />
          </View>

          <View style={styles.loginForm}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Sign up</Text>
            </View>
            <View style={styles.other}>
              <View style={styles.social}>
                <View style={styles.socialIcons}>
                  <Image source={facebookLogo} style={styles.logoStyle} />
                </View>
                <View style={styles.socialIcons}>
                  <Image source={googleLogo} style={styles.logoStyle} />
                </View>
                <View style={styles.socialIcons}>
                  <Image source={appleLogo} style={styles.logoStyle} />
                </View>
              </View>
              <View style={styles.orViewWith}>
                <Text style={styles.lineText}>Or register with email </Text>
              </View>
            </View>

            <View style={styles.emailInput}>
              <Ionicons
                name="person-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={onChangeEmail}
                value={email}
                placeholder="First name"
              />
            </View>

            <View style={styles.emailInput}>
              <Ionicons
                name="person-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Lastname"
              />
            </View>

            <View style={styles.emailInput}>
              <Ionicons
                name="at-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email ID"
              />
            </View>
            <View style={styles.passwordInput}>
              <Ionicons
                name="lock-closed-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
              />
              <Ionicons
                name="eye-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
            </View>
            <View style={styles.passwordInput}>
              <Ionicons
                name="lock-closed-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                onChangeText={onChangePassword}
                value={password}
                placeholder="Confirm password"
                secureTextEntry={true}
              />
              <Ionicons
                name="eye-outline"
                color={"#707070"}
                style={styles.inputIcon}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              //   onPress={this.buttonPressed}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.botttom}>
              <Text>Have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.bottomText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginVertical: 20,
  },
  headerText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 60,
    lineHeight: 62,
    fontFamily: "Caveat_700Bold",
  },

  hero: {
    flex: 1,
    marginBottom: 20,
  },
  heroImage: {
    flex: 1,
    height: 60,
  },
  loginForm: {
    flex: 2,
  },

  loginButton: {
    alignSelf: "stretch",
    backgroundColor: "#1573FE",
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 8,
    textAlign: "center",
    marginVertical: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },

  orViewWith: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 30,
  },
  lineText: {
    flex: 1,
    color: "#707070",
    lineHeight: 14,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins_300Light",
    fontWeight: "300",
  },
  social: {
    display: "flex",
    flexDirection: "row",
  },
  socialIcons: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingVertical: 13,
    textAlign: "center",
  },
  logoStyle: {
    width: 32,
    height: 32,
    textAlign: "center",
    marginHorizontal: "auto",
  },
  botttom: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
  bottomText: {
    fontSize: 14,
    color: "#1573FE",
    lineHeight: 20,
    fontFamily: "Poppins_700Bold",
  },

  emailInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D9D9D9",
    height: 40,
    borderRadius: 0,
    marginVertical: 10,
    fontFamily: "Poppins_700Bold",
  },
  passwordInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D9D9D9",
    height: 40,
    borderRadius: 0,
    marginVertical: 10,
    fontFamily: "Poppins_700Bold",
  },
  inputIcon: {
    // padding: 10,
    margin: 5,
    height: 32,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupScreen;
