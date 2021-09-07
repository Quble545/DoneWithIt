import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import Button from "../Button";

const SubmitForm = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={styles.container}>
      <Button title={title} color="primary" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12.5,
  },
});
export default SubmitForm;
