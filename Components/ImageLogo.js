import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default class ImageLogo extends React.Component {
  render() {
    return (
      <TouchableOpacity
      // onPress={() => this.props.navigation.navigate("HomePage")}
      >
        <Image
          style={styles.logo}
          source={require("./images/HeadingLogo.png")}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  logo: { width: 100, height: 100 }
});
