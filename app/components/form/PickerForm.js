import React, { useState } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";

import colors from "../../config/colors";
import PickerItem from "../PickerItem";
import ErrorMessage from "../ErrorMessage";

const PickerForm = ({
  name,
  label,
  Component = PickerItem,
  numOfColumns = 1,
  maxWidth = "100%",
  options,
}) => {
  const [show, setShow] = useState(false);
  const { setFieldValue, touched, values, errors } = useFormikContext();

  const handleSelect = (item) => {
    setFieldValue(name, item.id);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={[styles.container, { width: maxWidth }]}>
          <MaterialCommunityIcons
            name="apps"
            size={23}
            color={colors["lighter"]}
          />
          {values[name] ? (
            <Text style={styles.text}>
              {options.find((o) => o.id == values[name]).label}
            </Text>
          ) : (
            <Text style={styles.text}>{label}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={23}
            color={colors["medium"]}
          />
        </View>
      </TouchableWithoutFeedback>
      {touched[name] && errors[name] ? (
        <ErrorMessage message={errors[name]} />
      ) : null}
      <Modal visible={show}>
        <Text style={styles.title}>Select Category </Text>
        <FlatList
          data={options}
          keyExtractor={(option) => option.id.toString()}
          renderItem={({ item }) => (
            <Component
              item={item}
              onPress={() => {
                setShow(false);
                handleSelect(item);
              }}
            />
          )}
          numColumns={numOfColumns}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 60,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22.5,
    overflow: "hidden",
    marginVertical: 12.5,
  },
  text: {
    flex: 1,
    color: colors["medium"],
    fontSize: 18,
    marginLeft: 3,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
});

export default PickerForm;
