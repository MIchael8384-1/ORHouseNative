import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
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
      // .then(() => console.log("Please work"))
      .then(() => this.props.navigation.navigate("HomePage"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    console.log(this.state.email);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Container style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
              <Label>UserName</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Button
              title="Login"
              style={{ margin: 10 }}
              full
              rounded
              success
              onPress={this.handleLogin}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Button>

            <Button
              style={{ margin: 10 }}
              full
              rounded
              primary
              // onPress={() =>
              //   this.signUpUser(this.state.email, this.state.password)
              // }
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
