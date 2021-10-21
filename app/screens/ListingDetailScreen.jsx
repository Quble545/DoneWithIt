import React, { useContext } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import Card from "../components/Card";
import Profile from "../components/Profile";
import ContactSellerForm from "../components/ContactSellerForm";
import AuthContext from "../auth/context";

const ListingDetailScreen = ({ route }) => {
  const item = route.params;
  const { user } = useContext(AuthContext);
  const isCurrentUser = user.email === item.user.email;

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
          images={item.images}
          slide
        />
        <Profile
          title={isCurrentUser ? "You" : item.user.name}
          subtile={item.user.email}
        />
        {!isCurrentUser && <ContactSellerForm listing={item} />}
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
