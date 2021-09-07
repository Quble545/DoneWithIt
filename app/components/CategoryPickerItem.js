import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: item["backgroundColor"] },
          ]}
        >
          <MaterialCommunityIcons name={item.icon} size={40} />
        </View>
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 29,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    width: 80,
    textAlign: "center",
  },
  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default PickerItem;
