import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const RenderRightAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          color={colors["white"]}
          size={30}
        />
        <Text style={styles.text}>Delete</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: 100,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors["white"],
  },
});

export default RenderRightAction;
