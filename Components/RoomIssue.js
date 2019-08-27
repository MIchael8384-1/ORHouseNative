import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import ImageLogo from "./ImageLogo";

export default class RoomIssues extends React.Component {
  state = {
    issue: "",
    description: ""
  };
  render() {
    const { issue, description } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<ImageLogo />}
          rightComponent={{
            icon: "home",
            color: "#4A306E",
            onPress: () => this.props.navigation.navigate("HomePage")
          }}
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around"
          }}
        />
        <View>
          <Text>{this.props.navigation.getParam("room", "no title")}</Text>
          <Text>Issue</Text>
          <TextInput
            style={styles.input}
            value={issue}
            onChangeText={issue => this.setState({ issue })}
          ></TextInput>
          <Text>{issue}</Text>
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={description => this.setState({ description })}
          ></TextInput>
          <Text>{description}</Text>
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
  logo: { width: 450, height: 150 },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  input: {
    height: 40,
    borderColor: "purple",
    width: 200,
    borderWidth: 1
  },
  list: {
    height: 1,
    width: "100%"
  }
});
