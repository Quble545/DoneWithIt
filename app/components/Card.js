import React from "react";
import { Image } from "react-native-expo-image-cache";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import colors from "../config/colors";

const Card = ({ title, price, images, onPress, slide }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {slide ? (
          <SliderBox
            images={images}
            ImageComponent={({ source }) => (
              <Image
                style={styles.image}
                uri={source.url}
                preview={{ uri: source.thumbnailUrl }}
                tint="light"
              />
            )}
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
            LoaderComponent={() => <View />}
          />
        ) : (
          <Image
            style={styles.image}
            uri={images[0].url}
            preview={{ uri: images[0].thumbnailUrl }}
            tint="light"
          />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.headerText} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 290,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  headerText: {
    fontSize: 18,
  },
  price: {
    color: colors["secondary"],
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 5,
  },
  textContainer: {
    marginVertical: 15,
    marginLeft: 20,
  },
});

export default Card;
