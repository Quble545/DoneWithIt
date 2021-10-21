import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

const ImagesSlide = ({ images }) => {
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
        inactiveDotColor={colors["secondary"]}
        dotColor={colors["primary"]}
        circleLoop
        autoplay
        resizeMethod={"resize"}
        resizeMode={"cover"}
        imageLoadingColor={colors["primary"]}
        ImageComponentStyle={{ width: 400, height: 148 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 25,
  },
});

export default ImagesSlide;
