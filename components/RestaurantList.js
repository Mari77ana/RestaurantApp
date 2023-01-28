import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// komponenten visar de sökta restauranger, props item kommer fr Flatlist
const RestaurantList = ({ item }) => {
  return (
    <View style={styles.background}>
      <View style={styles.items}>
        <Text style={styles.name}>{item.name}</Text>
        <Image style={styles.imageStyle} source={{ url: item.image_url }} />
        <Text style={styles.text}>{item.location.address1}</Text>
        <Text style={styles.text}>Stars: {item.rating}</Text>
        <Text style={styles.text}>Price:{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    marginTop: 40,
    width: 400,
    height: 270,
    //alignContent: "center",
    //alignItems: "center",
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  items: {
    alignItems: "center",
  },

  imageStyle: {
    width: 290,
    height: 160,
    marginTop: 15,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    top: 7,
    fontStyle: "italic",
  },
  text: {
    fontSize: 17,
  },
});

export default RestaurantList;
