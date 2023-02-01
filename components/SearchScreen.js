import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import { API_KEY } from "../utilites";

// Pappan-SearchScreen
// Han har useState variabler och skickar props term till Barnet-SearchBar
const SearchScreen = () => {
  const [search, setSearch] = useState(""); // strängen är tom. Ingen sökning har gjorts än.
  const [results, setResults] = useState([]); // API datan ska sparas i en array. Vilket är tom från början
  const [loading, setLoading] = useState(true);

  const APP_KEY_APP = API_KEY; // min nyckel till API

  // Barnet-SearchBar skickar props till pappan
  // ska hämta restauranger fr APIet vilket sparas i variabeln searchValue
  const submitSearch = (searchValue) => {
    //skickar en förfrågan till apiet,
    fetch(
      `https://api.yelp.com/v3/businesses/search?location=stockholm&term=${searchValue}`,
      {
        headers: {
          Authorization: "Bearer " + APP_KEY_APP,
        },
      }
    ) // Får tillbaka svaret, en response i json, får datan jag söker på och mer hela APIet
      .then((response) => response.json())
      // Datan man får tillbaka sparas i en array-setResult
      .then((data) => setResults(data.businesses)) // Här finns api datan
      .then(() => setLoading(false)); // När vi har data i arrayen sätt till fals
  };

  return (
    <View>
      {/* Här  skickas datan  till SearchBar-Barnet fr Pappan-SearchScreen 
      Barnet-SearchBar */}
      <SearchBar
        search={search}
        changeSearch={(newSearch) => setSearch(newSearch)}
        submitSearch={submitSearch}
      />

      {/*OM DATA ÄR HÄMTAT OCH DATAN ÄR TOM VISA TEXT */}
      {!loading && results.length === 0 ? ( // om vi inte har data och sökningen
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Sorry no match</Text>
        </View>
      ) : (
        // loading ? undefined : results.length === 0 ? (

        <FlatList
          keyExtractor={(item) => item.id}
          data={results} // alla restauranger i arrayen efter lyckad sökning
          renderItem={({ item }) => {
            return <RestaurantList item={item} />; // returnera de sökta restaurangerna fr
          }} // komponenten RestaurantList
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: 150,
    width: 250,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    left: 70,
    top: 100,
    backgroundColor: "black",
  },
  textStyle: {
    fontStyle: "italic",
    fontSize: 25,
    color: "white",
  },
});

export default SearchScreen;
