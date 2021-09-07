import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet, Text } from "react-native";

import InputField from "../InputField";
import colors from "../../config/colors";

const SellerInputForm = ({ name, maxWidth, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        <InputField
          {...otherProps}
          maxWidth={maxWidth}
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12.5,
  },
});

export default SellerInputForm;
