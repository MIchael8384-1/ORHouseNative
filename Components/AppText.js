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

export default class AppText extends React.Component {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>{this.props.children}</Text>
      </MyAppText>
    );
  }
}
