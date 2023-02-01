import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//props item som skickas som argument för att hämta restaurang info som sedan skrivs ut
// i Flatlist som Pappan - SearchScreen har
const RestaurantList = ({ item }) => {
  return (
    <View style={styles.background}>
      <View style={styles.items}>
        <Text style={styles.name}>{item.name}</Text>
        <Image style={styles.imageStyle} source={{ url: item.image_url }} />
        <Text style={styles.text}>Adress: {item.location.address1}</Text>
        <Text style={styles.text}>Phone: {item.phone}</Text>
        <Text style={styles.text}>Stars: {item.rating}</Text>
        <Text style={styles.text}>Price:{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "",
    //
    marginTop: 40,
    width: 400,
    height: 300,
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
    color: "black",
    // #009900
  },
  text: {
    fontSize: 17,
    top: 7,
    color: "black",
  },
});

export default RestaurantList;
