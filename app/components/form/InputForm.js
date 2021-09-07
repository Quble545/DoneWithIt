import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const InputForm = ({ name, maxWidth, ...otherProps }) => {
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
      {errors[name] && touched[name] ? (
        <ErrorMessage message={errors[name]} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12.5,
  },
});

export default InputForm;
