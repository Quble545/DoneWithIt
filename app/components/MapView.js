import React from "react";
import Map from "react-native-maps";
import { StyleSheet } from "react-native";

const MapView = () => {
  return <Map style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
  },
});

export default MapView;
