import React from "react";
import { Modal, View, StyleSheet } from "react-native";

import ActivityIndicator from "./ActivityIndicator";

const ActivityModal = ({ visible }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <ActivityIndicator visible={visible} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(102, 102, 102, 0.5)",
  },
});

export default ActivityModal;
