import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <Text style={styles.text}>{message}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors["primary"],
  },
});

export default ErrorMessage;
