import React, { useState } from "react";
import * as Yup from "yup";
import { View, StyleSheet } from "react-native";
import {
  Form,
  InputForm,
  PickerForm,
  ImagePickerForm,
  SubmitForm,
} from "../components/form";

import CategoryPicker from "../components/CategoryPickerItem";
import ProgressBar from "../components/ProgressBar";
import listingApi from "../api/listings";
import useApi from "../hooks/useApi";
import useLocation from "../hooks/useLocation";

const schema = Yup.object({
  title: Yup.string().min(3).required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  categoryId: Yup.number().required().label("Category"),
  description: Yup.string(),
  images: Yup.array()
    .min(1, "Please select at least one image.")
    .label("Image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    id: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    id: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    id: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    id: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    id: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    id: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    id: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    id: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    id: 9,
  },
];

const ListingEditScreen = () => {
  const [item] = useState({
    title: "",
    price: "",
    categoryId: "",
    description: "",
    images: [],
  });
  const [progress, setProgress] = useState();
  const [isProgress, setIsProgress] = useState(false);
  const { request } = useApi(listingApi.addListings);
  const { location } = useLocation();

  const handleSubmit = async (values) => {
    const data = { ...values, location };
    setIsProgress(true);
    await request(data, {
      onUploadProgress: (progress) =>
        setProgress(progress.loaded / progress.total),
    });
  };

  return (
    <View style={styles.container}>
      {isProgress ? (
        <ProgressBar
          progress={progress}
          onFinish={() => {
            setIsProgress(false);
            setProgress(0);
          }}
        />
      ) : (
        <Form
          initialValues={item}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <ImagePickerForm name="images" />
          <InputForm name="title" placeholder="Title" icon="pen" />
          <InputForm
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            icon="dollar-sign"
            maxWidth={135}
          />
          <PickerForm
            name="categoryId"
            label="Category"
            options={categories}
            Component={CategoryPicker}
            numOfColumns={3}
            maxWidth={225}
          />
          <InputForm
            name="description"
            placeholder="Description"
            icon="calendar-alt"
          />
          <SubmitForm title="Post" />
        </Form>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 510,
    justifyContent: "space-evenly",
    marginHorizontal: 17,
  },
});

export default ListingEditScreen;
