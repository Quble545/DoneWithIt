import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WellcomeScreen from "../screens/WellcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

import theme from "../navigation/themeNavigation";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="wellcome"
      component={WellcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{ title: "Login" }}
    />
    <Stack.Screen
      name="register"
      component={RegisterScreen}
      options={{ title: "Register" }}
    />
  </Stack.Navigator>
);

const AuthNavigation = () => (
  <NavigationContainer theme={theme}>
    <StackNavigator />
  </NavigationContainer>
);

export default AuthNavigation;
