import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("./Components/images/logo1.png")}
              onPress={() => navigate("SignIn")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A306E",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: { width: 450, height: 150 }
});
