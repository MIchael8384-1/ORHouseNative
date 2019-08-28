import React from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet } from "react-native";
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
      <View style={styles.container}>
        <ScrollView>
          <Button
            raised
            icon={{ name: "home", type: "font-awesome", size: 20 }}
            title="Three"
            buttonStyle={styles.button}
            onPress={this.navigateToScreen("LandingPage")}
          />
          <Button
            raised
            icon={{ name: "home", type: "font-awesome", size: 20 }}
            title="Three"
            buttonStyle={styles.button}
            onPress={this.navigateToScreen("HomePage")}
          />
          <Button
            raised
            icon={{ name: "home", type: "font-awesome", size: 20 }}
            title="Four"
            buttonStyle={styles.button}
            onPress={this.navigateToScreen("Maintenance")}
          />
          {/* <Button
            raised
            icon={{ name: "user-circle", type: "font-awesome", size: 20 }}
            title="Five"
            buttonStyle={styles.button}
            onPress={this.navigateToScreen("Five")}
          /> */}
        </ScrollView>
      </View>
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
    flex: 1
  },
  button: {
    backgroundColor: "white"
  }
});
