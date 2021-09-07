import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";

const OffilneNotice = () => {
  const info = useNetInfo();

  if (info.type !== "unknown" && info.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors["white"],
  },
});

export default OffilneNotice;
