import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const getRestaurant = () => {
    onTermSubmit(term);
    onTermChange(""); // ta bort gamla texten i placeholdern
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={!term} onPress={getRestaurant}>
        <Image style={styles.icon} source={require("../assets/search.png")} />
      </TouchableOpacity>

      <TextInput
        style={styles.placeHolder}
        placeholder="Search Restaurant"
        color="black"
        value={term} // inputen uppdateras
        onChangeText={onTermChange} // användarens input sparas i variabeln onTermChange
        //onEndEditing={onTermSubmit} //Callback that is called when text input ends in  variable onTermSubmit
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
    // borderWidth: 1,
    // color: "black",
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
