import * as React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.userDetails}>
          <View style={styles.userAvatar}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/images/user.jpeg")}
            />
          </View>
          <View style={styles.userNames}>
            <Text style={styles.name}>Mohammed Name</Text>
            <Text style={styles.bio}>Web developer</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="person" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Personal details</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="settings" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Settings</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="gift" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Referal code</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="settings" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Settings</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="person" color={"#012751"} />
          </View>
          <Text style={styles.listText}>FAQs</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="pencil" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Terms and conditions</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.listIcon}>
            <Ionicons size={16} name="md-help-circle" color={"#012751"} />
          </View>
          <Text style={styles.listText}>Support</Text>
          <Ionicons
            name="ios-chevron-forward"
            color={"#012751"}
            style={styles.listIcon}
          />
        </View>

        <View style={styles.community}>
          <Ionicons
            name="headset"
            size={24}
            color={"#7988D9"}
            style={styles.communityIcon}
          />
          <Text style={styles.communityText}>
            Feel free to ask, we're ready to help
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
  },
  userDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 24,
  },
  userAvatar: {
    borderRadius: 12,
    width: 50,
    height: 50,
    marginRight: 12,
  },
  avatarImage: {
    alignSelf: "stretch",
    flex: 1,
  },
  userNames: {
    flex: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "VarelaRound_400Regular",
    marginBottom: 6,
    color: "#122546",
  },
  bio: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "VarelaRound_400Regular",
    color: "#657885",
  },

  divider: {
    borderBottomColor: "#F8F8F8",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
  },
  personalDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  listIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
    borderRadius: 5,
    backgroundColor: "#F6F8FE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  actionIcon: {},
  listText: {
    color: "#012751",
    flex: 1,
  },

  community: {
    padding: 16,
    marginVertical: 32,
    backgroundColor: "#ECF0FE",
    // opacity: "0.5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 12,
  },
  communityIcon: {
    marginHorizontal: 5,
  },
  communityText: {
    color: "#7988D9",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "VarelaRound_400Regular",
  },
});

export default ProfileScreen;
