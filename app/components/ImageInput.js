import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";

import colors from "../config/colors";

const ImageInput = ({ uri, onChange }) => {
  const handleSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) onChange(result.uri);
  };

  const handlePress = async () => {
    if (uri)
      return Alert.alert("Delete", "Are you sure to delete this image?", [
        { text: "Yes", onPress: () => onChange(uri) },
        { text: "No" },
      ]);

    await handleSelect();
  };

  const handlePermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted)
      alert("You need to enable photos permissions to access photos");
  };

  useEffect(() => {
    handlePermission();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {uri && <Image source={{ uri: uri }} style={styles.image} />}
        {!uri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors["medium"]}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageInput;
