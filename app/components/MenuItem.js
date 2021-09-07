import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const MenuItem = ({ icon, title, color, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[styles.iconContainer, { backgroundColor: colors[color] }]}
        >
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={colors["white"]}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color={colors["medium"]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors["primary"],
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginLeft: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 16.5,
    flexGrow: 1,
  },
});

export default MenuItem;
