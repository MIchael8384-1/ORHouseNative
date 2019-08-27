import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import HomePage from "./Components/HomePage";
import Maintenance from "./Components/Maintenance";
import RoomIssue from "./Components/RoomIssue";

const AppNavigator = createBottomTabNavigator(
  {
    Landing: { screen: LandingPage },
    SignIn: { screen: SignIn },
    HomePage: { screen: HomePage },
    Maintenance: { screen: Maintenance },
    RoomIssue: { screen: RoomIssue }
  },
  {
    initialRouteName: "Landing"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
