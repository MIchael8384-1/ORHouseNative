import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomePage extends React.Component {
  state = {
    currentUser: null
  };
  render() {
    const { currentUser } = this.state;
    return (
      <View>
        <Text style={styles.container}>
          Welcome home {currentUser && currentUser.email}
        </Text>
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
