import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import ImageLogo from "./ImageLogo";

export default class RoomIssues extends React.Component {
  state = {
    issue: "",
    description: ""
  };
  render() {
    const { issue, description } = this.state;
    return (
      // <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
      //   <SafeAreaView style={styles.container}>

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

        <View>
          <Image style={styles.logo} source={require("./images/360Pic.jpg")} />
          <View style={styles.container}>
            <View>
              <Text style={styles.font}>
                {this.props.navigation.getParam("room", "no title")}
              </Text>
              <Text style={styles.font}>Issue:</Text>
              <TextInput
                style={styles.input}
                value={issue}
                onChangeText={issue => this.setState({ issue })}
              ></TextInput>
              <Text style={styles.font}>{issue}</Text>
              <Text style={styles.font}>Description:</Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={description => this.setState({ description })}
              ></TextInput>
              <Text style={styles.font}>{description}</Text>

              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("HOME")}
              >
                <Text style={styles.TextStyle}> SEND </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      //   </SafeAreaView>
      // </KeyboardAvoidingView>
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
    justifyContent: "center"
  },
  logo: { width: 450, height: 224 },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  input: {
    backgroundColor: "white",
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    width: 300,
    borderRadius: 25,
    fontSize: 25
  },

  font: {
    fontSize: 20,
    color: "#fff"
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#ED3192",
    borderRadius: 20
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});
