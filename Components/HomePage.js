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
            onPress: () => this.props.navigation.navigate("HOME")
          }}
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around"
          }}
        />

        <View style={styles.content}>
          <Text
            style={{
              paddingBottom: 40,
              fontSize: 20,
              color: "#fff"
            }}
          >
            {address}
          </Text>
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
          <Text
            style={{
              marginTop: 30,
              fontSize: 20,
              color: "#fff"
            }}
          >
            {fullName}
          </Text>
          <Text style={styles.font}>Rent: £{rent}</Text>
          <Text style={styles.font}>Tenancy Expires: {tenancyExpires}</Text>

          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            // title="Maintenance"
            onPress={() => this.props.navigation.navigate("MAINTENANCE")}
          >
            <Text style={styles.TextStyle}>MAINTENANCE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            title="Chat"
            onPress={() => this.props.navigation.navigate("CHAT")}
          >
            <Text style={styles.TextStyle}>CHAT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// toMaintenancePage = () => {
//   this.props.navigation.navigate("Maintenance");
// };
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

  SubmitButtonStyle: {
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#ED3192",
    borderRadius: 20,
    width: 300
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});
