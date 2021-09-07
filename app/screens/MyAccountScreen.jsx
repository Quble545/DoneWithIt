import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import Profile from "../components/Profile";
import MenuItem from "../components/MenuItem";
import ItemSeparator from "../components/ItemSeparator";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: "format-list-bulleted",
    color: "primary",
  },
  {
    id: 2,
    title: "My Messages",
    icon: "email",
    color: "secondary",
  },
];

const MyAccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <Profile title={user.name} subtile={user.email} />

      <FlatList
        data={menuItems}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <MenuItem
            title={item.title}
            icon={item.icon}
            color={item.color}
            onPress={() =>
              item.id === 2 ? navigation.navigate("messages") : null
            }
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        style={styles.flatList}
      />

      <View style={styles.logOut}>
        <MenuItem
          title="Log Out"
          icon="logout"
          color="yellow"
          onPress={logOut}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    flex: 1,
    paddingTop: 25,
  },
  flatList: {
    paddingTop: 45,
  },
  logOut: {
    width: "100%",
    position: "absolute",
    top: 350,
  },
});

export default MyAccountScreen;
