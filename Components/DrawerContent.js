import React from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

export default class DrawerContent extends React.Component {
  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <Image
              source={require("./images/logo1.png")}
              style={{ height: 120, width: 120, boarderRadius: 60 }}
            />
            <Button
              raised
              icon={{ name: "home", type: "font-awesome", size: 20 }}
              title="LandingPage"
              buttonStyle={styles.button}
              onPress={this.navigateToScreen("LandingPage")}
            />
            <Button
              raised
              icon={{ name: "home", type: "font-awesome", size: 20 }}
              title="HomePage"
              buttonStyle={styles.button}
              onPress={this.navigateToScreen("HomePage")}
            />
            <Button
              raised
              icon={{ name: "home", type: "font-awesome", size: 30 }}
              title="Maintenance"
              buttonStyle={styles.button}
              onPress={this.navigateToScreen("Maintenance")}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
DrawerContent.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    flex: 1,
    height: 150
  },
  button: {
    backgroundColor: "white"
  }
});
