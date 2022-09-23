import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function RecentScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [focusedInput, setInputFocused] = React.useState("transparent");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Search</Text>
        <View style={[{ borderColor: focusedInput }, styles.searchInput]}>
          <Ionicons
            name="search"
            size={30}
            color={"#121212"}
            style={styles.inputIcon}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholderTextColor="#565656"
            color="#121212"
            fontSize={20}
            fontWeight="bold"
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Search Giggies"
            onFocus={() => setInputFocused("#121212")}
            onBlur={() => setInputFocused("transparent")}
          />
        </View>

        <View>
          <Text style={styles.subTitle}>Recently Viewed</Text>
          <View>
            <Text>You have not made any searches yet</Text>
          </View>
        </View>
        {/* <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: "700",
    fontFamily: "VarelaRound_400Regular",
    marginBottom: 6,
    color: "#122546",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "VarelaRound_400Regular",
    marginBottom: 6,
    color: "#122546",
  },
  searchInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ececec",
    color: "red",
    borderWidth: 2,
    height: 55,
    borderRadius: 12,
    marginBottom: 35,
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    lineHeight: 1,
  },
  inputIcon: {
    // padding: 10,
    margin: 8,
    height: 32,
    width: 32,
    resizeMode: "stretch",
    alignItems: "center",
    fontSize: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default RecentScreen;
