import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, ThemeProvider, Header } from "react-native-elements";
import ImageLogo from "./ImageLogo";

export default class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<ImageLogo />}
          rightComponent={{
            icon: "home",
            color: "#4A306E",
            onPress: () => this.props.navigation.navigate("HOME")
          }}
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around"
          }}
        />

        <View></View>
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
