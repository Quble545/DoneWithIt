import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

const categories = [
  {
    label: "All",
    id: 0,
  },
  {
    label: "Furniture",
    id: 1,
  },
  {
    label: "Cars",
    id: 2,
  },
  {
    label: "Cameras",
    id: 3,
  },
  {
    label: "Games",
    id: 4,
  },
  {
    label: "Clothing",
    id: 5,
  },
  {
    label: "Sports",
    id: 6,
  },
  {
    label: "Movies",
    id: 7,
  },
  {
    label: "Books",
    id: 8,
  },
  {
    label: "Other",
    id: 9,
  },
];

const FilterListings = ({ selected, setSelected }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {categories.map((item) => (
          <TouchableWithoutFeedback
            onPress={() => setSelected(item)}
            key={item.id}
          >
            <View
              style={[
                styles.textContainer,
                selected?.id === item.id && {
                  backgroundColor: colors["secondary"],
                },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  selected?.id === item.id && {
                    color: colors["white"],
                  },
                ]}
              >
                {item.label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 17,
  },
  textContainer: {
    backgroundColor: colors["white"],
    width: 100,
    height: 35,
    marginHorizontal: 5,
    borderRadius: 35,
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingTop: 4,
    color: colors["pureBlack"],
  },
});

export default FilterListings;
