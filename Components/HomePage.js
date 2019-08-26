import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class HomePage extends React.Component {
  state = {
    currentUser: null
  };
  render() {
    const { currentUser } = this.state;
    return (
      <View>
        <Text>Welcome home</Text>
        <Image source={require("./images/logo1.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
