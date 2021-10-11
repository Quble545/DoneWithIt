import React from "react";
import LottiView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <LottiView autoPlay source={require("../assets/animation/loader.json")} />
  );
};

export default ActivityIndicator;
