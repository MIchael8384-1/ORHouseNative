import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image
} from "react-native";
import * as firebase from "firebase";
import fireConfig from "./fire";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";

// import { ScrollView } from "react-native-gesture-handler";

firebase.initializeApp(fireConfig);

export default class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    userName: "",
    errorMessage: null
  };

  // signUpUser = (email, password) => {};

  handleLogin = () => {
    const { email, password } = this.state;
    console.log("Hello");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("HOME"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      // <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Container style={styles.container}>
          <Form>
            <Image
              style={styles.logo}
              source={require("./images/whiteLogo.png")}
            />
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                style={styles.input}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Username</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
                style={styles.input}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                color="white"
                style={styles.input}
              />
            </Item>
            <Button
              title="Login"
              style={{
                margin: 10,
                marginTop: 50,
                backgroundColor: "#ED3192"
              }}
              full
              rounded
              success
              onPress={this.handleLogin}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A306E",
    // alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  logo: {
    width: 300,
    height: 150,
    // alignItems: "center",
    justifyContent: "center"
  },
  input: {
    color: "#fff"
  }
});
