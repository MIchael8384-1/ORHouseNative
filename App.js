import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import HomePage from "./Components/HomePage";
import Maintenance from "./Components/Maintenance";

const AppNavigator = createBottomTabNavigator(
  {
    Landing: { screen: LandingPage },
    SignIn: { screen: SignIn },
    HomePage: { screen: HomePage },
    Maintenance: { screen: Maintenance }
  },
  {
    initialRouteName: "Landing"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
