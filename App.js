import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import HomePage from "./Components/HomePage";
import Maintenance from "./Components/Maintenance";
import RoomIssue from "./Components/RoomIssue";

import DrawerContent from "./Components/DrawerContent";
import Hidden from "./Components/Hidden";

const AppNavigator = createDrawerNavigator(
  {
    Landing: {
      screen: LandingPage,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    },
    Home: {
      screen: HomePage
    },
    Maintenance: {
      screen: Maintenance
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    }
  },
  {
    initialRouteName: "Landing"
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// import {
//   createAppContainer,
//   createBottomTabNavigator,
//   createDrawerNavigator
// } from "react-navigation";

// import LandingPage from "./Components/LandingPage";
// import SignIn from "./Components/SignIn";
// import HomePage from "./Components/HomePage";
// import Maintenance from "./Components/Maintenance";
// import RoomIssue from "./Components/RoomIssue";

// const AppNavigator = createDrawerNavigator(
//   {
//     Landing: { screen: LandingPage },
//     SignIn: { screen: SignIn },
//     Home: { screen: HomePage },
//     Maintenance: { screen: Maintenance },
//     RoomIssue: { screen: RoomIssue }
//   },
//   {
//     initialRouteName: "Landing"
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;

// // tabBarOptions: {
// //       visible: false
// //     },
