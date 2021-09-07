import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons
          color={colors["white"]}
          size={35}
          name="close"
        />
        <MaterialCommunityIcons
          name="trash-can"
          color={colors["white"]}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["pureBlack"],
  },
  image: {
    width: "100%",
    height: "100%",
    bottom: 40,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    top: 40,
  },
  icon: {
    backgroundColor: "yellow",
    width: 50,
    height: 50,
  },
});

export default ViewImageScreen;
