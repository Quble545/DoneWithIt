import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import colors from "../config/colors";
import Card from "../components/Card";
import ItemSeparator from "../components/ItemSeparator.js";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import FilterListings from "../components/FilterListings";

import ListingApi from "../api/listings";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = useState({ label: "All", id: 0 });
  const [listings, setListings] = useState([]);
  const {
    data,
    error,
    isLoading,
    request: loadListings,
  } = useApi(ListingApi.getListings);

  const handleSelect = (item) => {
    setSelected({ ...item });
    item.id === 0
      ? setListings([...data])
      : setListings([...data.filter((d) => d.categoryId == item.id)]);
  };

  const handleLoad = async () => {
    const responsedata = await loadListings();
    setListings(responsedata);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={isLoading} />
      {error && (
        <View style={styles.errorLabel}>
          <Text style={styles.errorText}>Couldn't retrieve listings.</Text>
          <Button title="Retry" color="primary" onPress={loadListings} />
        </View>
      )}
      {!isLoading && (
        <>
          <FilterListings selected={selected} setSelected={handleSelect} />
          {listings.length === 0 && (
            <Text style={styles.text}>No Listings</Text>
          )}
          <FlatList
            data={listings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
                price={item.price}
                onPress={() => navigation.navigate("ListingDetail", item)}
              />
            )}
            ItemSeparatorComponent={() => <ItemSeparator height={10} />}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              handleLoad();
              setSelected({ label: "All", id: 0 });
              setRefreshing(false);
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  errorLabel: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -10,
  },
  errorText: {
    fontSize: 17,
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 25,
    color: colors["medium"],
  },
});

export default ListingsScreen;
