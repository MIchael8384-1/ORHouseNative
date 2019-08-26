import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";

export default class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Image style={styles.logo} source={require("./images/logo1.png")} />
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
