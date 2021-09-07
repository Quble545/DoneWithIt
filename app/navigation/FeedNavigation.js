import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="listings"
      component={ListingsScreen}
      options={() => ({ headerShown: false, presentation: "transparentModal" })}
    />
    <Stack.Screen
      name="ListingDetail"
      component={ListingDetailScreen}
      options={() => ({ title: "Detail" })}
    />
  </Stack.Navigator>
);

const FeedNavigation = () => <StackNavigator />;

export default FeedNavigation;
