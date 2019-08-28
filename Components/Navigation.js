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

import DrawerContent from "./DrawerContent";

const AppNavigator = createDrawerNavigator(
  {
    Three: {
      screen: HomePage
    },
    Four: {
      screen: Maintenance
    },
    Five: {
      screen: Five
    }
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: "right",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
