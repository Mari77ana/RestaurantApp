import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

//Komponenten SearchBar tar emot props  fr pappan,
const SearchBar = ({ search, changeSearch, submitSearch }) => {
  //funktionen getRestaurant har värdet på sökningen och rensar den
  const getRestaurant = () => {
    submitSearch(search); // Det värde som användaren skrivit
    changeSearch(""); // tar bort gamla texten i placeholdern med att tilldela den en tom sträng
  };
  return (
    <View style={styles.container}>
      {/* När knappen blir tryckt körs getrestaurant funktionen (datan skickas till pappan för att hämta Api)  */}
      <TouchableOpacity disabled={!search} onPress={getRestaurant}>
        <Image style={styles.icon} source={require("../assets/search.png")} />
      </TouchableOpacity>

      <TextInput
        style={styles.placeHolder}
        placeholder="Search Restaurant"
        value={search} // inputen uppdateras
        onChangeText={changeSearch} // användarens input sparas i variabeln onTermChange
        autoCapitalize={false} // tar bort stor bokstav
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "white",
    marginTop: 60,
    marginHorizontal: 20,

    flexDirection: "row",
    borderWidth: 0.2,
    color: "black",
  },
  icon: {
    height: 40,
    width: 40,

    alignSelf: "center",
    marginHorizontal: 12,
  },
  placeHolder: {
    flex: 1,
    fontSize: 26,
  },
});

export default SearchBar;
