import React from "react";
import * as Progress from "react-native-progress";
import LottiView from "lottie-react-native";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

const ProgressBar = ({ progress, onFinish }) => {
  return progress < 1 ? (
    <Progress.Bar
      progress={progress}
      color={colors["primary"]}
      style={styles.container}
    />
  ) : (
    <LottiView
      loop={false}
      autoPlay
      source={require("../assets/animation/done.json")}
      onAnimationFinish={onFinish}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 375,
    left: 125,
    width: 150,
  },
});

export default ProgressBar;
