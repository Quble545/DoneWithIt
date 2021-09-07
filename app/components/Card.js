import React from "react";
import { Image } from "react-native-expo-image-cache";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";

const Card = ({ title, price, imageUrl, thumbnailUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
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
