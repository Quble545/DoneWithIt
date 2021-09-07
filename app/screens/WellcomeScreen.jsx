import React from "react";
import { StyleSheet, ImageBackground, Image, Text, View } from "react-native";

import colors from "../config/colors";
import Button from "../components/Button";

const WellcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>sell what you don't need</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="login"
          color="primary"
          onPress={() => navigation.navigate("login")}
        />
        <Button
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  text: {
    color: colors["black"],
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 40,
  },
  btnContainer: {
    width: "92.5%",
    height: 175,
    justifyContent: "space-evenly",
  },
});

export default WellcomeScreen;
