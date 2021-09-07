import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default PickerItem;
