import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

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
import { firstFromTime } from "uuid-js";

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
    userName: ""
  };

  // signUpUser = (email, password) => {};

  loginUser = (email, password) => {
    try {
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
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
              />
            </Item>
            <Item floatingLabel>
              <Label>UserName</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={userName => this.setState({ userName })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              style={{ margin: 10 }}
              full
              rounded
              success
              onPress={() => {
                this.state.email, this.state.password;
              }}
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
