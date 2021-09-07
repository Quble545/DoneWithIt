import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import Card from "../components/Card";
import Profile from "../components/Profile";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailScreen = ({ route }) => {
  const item = route.params;

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
        behavior="position"
        style={styles.keyboard}
      >
        <Card
          title={item.title}
          price={item.price}
          imageUrl={item.images[0].url}
          thumbnailUrl={item.images[0].thumbnailUrl}
        />
        <Profile title="Mosh Hamedani" subtile="5 Listings" />
        <ContactSellerForm listing={item} />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
});

export default ListingDetailScreen;
