import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const Profile = ({ title, subtile }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mosh.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{title}</Text>
        <Text style={styles.subTitle}>{subtile}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={25}
        color={colors["medium"]}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 23,
    marginRight: 12,
  },
  textHeader: {
    fontSize: 17,
  },
  subTitle: {
    color: colors["medium"],
    fontSize: 15,
  },
  textContainer: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default Profile;
