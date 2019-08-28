import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { ThemeProvider, Header } from "react-native-elements";
import ImageLogo from "./ImageLogo";
import ProgressCircle from "react-native-progress-circle";

export default class HomePage extends React.Component {
  state = {
    address: "1 Portland Street, Manchester, M1 1AA",
    firstName: "John",
    surname: "Smith",
    rent: "500.00",
    tenancyExpires: "29th September 2019",
    daysRemaining: 12
  };

  render() {
    const {
      daysRemaining,
      address,
      firstName,
      surname,
      rent,
      tenancyExpires
    } = this.state;
    const fullName = firstName + " " + surname;

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

        <View style={styles.content}>
          <Text style={styles.font}>{address}</Text>
          <Text style={styles.font}>Rent Due</Text>
          <ProgressCircle
            style={styles.graph}
            percent={60}
            radius={50}
            borderWidth={8}
            color="#ED3192"
            shadowColor="#4A306E"
            bgColor="#4A306E"
          >
            <Text style={styles.font}>{daysRemaining} days</Text>
          </ProgressCircle>
          <Text style={styles.font}>{fullName}</Text>
          <Text style={styles.font}>Rent: £{rent}</Text>
          <Text style={styles.font}>Tenancy Expires: {tenancyExpires}</Text>
          <Button
            title="Maintenance"
            onPress={() => this.props.navigation.navigate("Maintenance")}
          />
          <Button
            title="Chat"
            onPress={() => this.props.navigation.navigate("Chat")}
          />
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
  content: {
    flex: 1,
    backgroundColor: "#4A306E",
    justifyContent: "center",
    alignItems: "center"
  },
  // logoContainer: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flex: 1
  // },
  logo: { width: 450, height: 150 },
  font: {
    fontSize: 20,
    color: "#fff"
  },
  graph: {
    paddingTop: 40
  }
});
