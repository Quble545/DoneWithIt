import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";

import colors from "../config/colors";

const InputField = ({
  icon,
  placeholder,
  maxWidth = "100%",
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width: maxWidth }]}>
      <FontAwesome5 name={icon} size={20} color={colors["lighter"]} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 60,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22.5,
    overflow: "hidden",
  },
  input: {
    fontSize: 18,
    color: colors["black"],
    marginLeft: 8,
    width: "100%",
  },
});

export default InputField;
