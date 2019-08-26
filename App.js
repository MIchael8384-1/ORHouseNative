import { createStackNavigator, createAppContainer } from "react-navigation";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import HomePage from "./Components/HomePage";

const AppNavigator = createStackNavigator(
  {
    Landing: LandingPage,
    SignIn: SignIn,
    HomePage: HomePage
  },
  {
    initialRouteName: "Landing"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
