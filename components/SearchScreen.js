import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import { API_KEY } from "../utilites";

// Pappan-SearchScreen, skickar datan till Barnet-SearchBar
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // göra fetch när vi har value
  const APP_KEY_APP = API_KEY;
  // "DUv-ghf0EpgfvCn_HGnMMwNKwEuLQN20J-FHu3Q6z_nz3U596Zc6ePEMUeLsPHldlqfDNdT5_YrUZyQMSn-rce351V1DSBSic2ix6lQYnS_XF50HpxW0u9DiUjDIY3Yx";
  const onTermSubmit = (searchValue) => {
    // fetch med value som är antingen mat eller restauraung
    //skickar en förfrågan till api
    fetch(
      `https://api.yelp.com/v3/businesses/search?location=stockholm&term=${searchValue}`,
      {
        headers: {
          Authorization: "Bearer " + APP_KEY_APP,
        },
      }
    ) // Får tillbaka svaret i json, får det jag söker på och mer hela API
      .then((response) => response.json())
      // Datan man får tillbaka sparas i en array-setResult
      .then((data) => setResults(data.businesses))
      .then(() => setLoading(false)); // När vi har data i arrayen visas den
  };

  return (
    <View>
      {/* Här  skickas datan  till SearchBar-Barnet fr Pappan-SearchScreen 
      Barnet-SearchBar */}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />
      {loading ? null : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={results}
          renderItem={({ item }) => {
            return <RestaurantList item={item} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
