import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="myaccount"
      component={MyAccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="messages"
      component={MessagesScreen}
      options={{ title: "Messages" }}
    />
  </Stack.Navigator>
);

const AccountNavigation = () => <StackNavigator />;
export default AccountNavigation;
