import React, { useRef } from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "../ImageInput";
import ErrorMessage from "../ErrorMessage";

const ImagePickerForm = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const scroll = useRef();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleDelete = (uri) => {
    setFieldValue(name, [...values[name].filter((u) => u !== uri)]);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          ref={scroll}
          onContentSizeChange={() => scroll.current.scrollToEnd()}
        >
          {values[name].map((imageUri, index) => (
            <ImageInput key={index} uri={imageUri} onChange={handleDelete} />
          ))}
          <ImageInput onChange={(uri) => handleAdd(uri)} />
        </ScrollView>
      </View>
      {touched[name] && errors[name] ? (
        <ErrorMessage message={errors[name]} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12.5,
  },
});

export default ImagePickerForm;
