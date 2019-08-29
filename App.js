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
import Chat from "./Components/Chat";

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
    HOME: {
      screen: HomePage
    },
    MAINTENANCE: {
      screen: Maintenance
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    },
    CHAT: {
      screen: Chat
    },
    RoomIssue: {
      screen: RoomIssue,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    }
    // SignOut: {
    //   screen: SignOut
    // }
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
// import Chat from "./Components/Chat";

// const AppNavigator = createBottomTabNavigator(
//   {
//     Landing: { screen: LandingPage },
//     SignIn: { screen: SignIn },
//     Home: { screen: HomePage },
//     Maintenance: { screen: Maintenance },
//     RoomIssue: { screen: RoomIssue },
//     CharacterData: { screen: Chat }
//   },
//   {
//     initialRouteName: "Landing"
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;

// tabBarOptions: {
//       visible: false
//     },
