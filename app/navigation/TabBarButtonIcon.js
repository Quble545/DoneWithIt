import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const TabBarButtonIcon = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={35}
          color={colors["white"]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: 68,
    height: 68,
    borderRadius: 50,
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: colors["white"],
  },
});

export default TabBarButtonIcon;
