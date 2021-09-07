import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigation from "./FeedNavigation";
import AccountNavigation from "./AccountNavigation";

import themeNavigation from "./themeNavigation";
import TabBarButtonIcon from "./TabBarButtonIcon";
import OffilneNotice from "../components/OffilneNotice";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigation}
      options={() => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name="edit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <TabBarButtonIcon onPress={() => navigation.navigate("edit")} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigation}
      options={() => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      })}
    />
  </Tab.Navigator>
);
const AppNavigation = () => {
  const navigationRef = useRef();
  useNotifications(() => {
    navigationRef.current?.navigate("Account");
  });

  return (
    <NavigationContainer theme={themeNavigation} ref={navigationRef}>
      <OffilneNotice />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
