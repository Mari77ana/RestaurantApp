import React, { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Alert,
  Image,
} from "react-native";

// Komponenten LogIn med props navigation
const LogIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // funktionen handlelogin tar dig till nästa sida om inloggningen stämmer
  const handleLogin = () => {
    if (userName == "mariana" && password == "mums") {
      setUserName("");
      setPassword("");
      navigation.navigate("Restaurant Search"); // använder props navigation för att komma dit
    } else {
      Alert.alert("Error", "Wrong Password or User Name", [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.centerItems}>
      <Image
        source={require("../assets/9fde2995246431.5e93304946754.jpg")} // profilbild
        style={styles.image}
      />
      <TextInput
        style={styles.placeHolder}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
        autoCapitalize={false} // Spelar ingen roll om det börjar med stor el liten bokstav
      />
      <TextInput
        style={styles.placeHolder}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize={false}
        secureTextEntry={true} // displayar ej lösenordet
      />

      <View style={styles.button}>
        <Button
          title="Log In"
          onPress={handleLogin} // funktionen handleLogin för dig till SearchScreen när knappen blir tryckt
          //color="dodgerblue"
          disabled={!userName || !password} // Knappen blir synlig när användar fälten är ifyllt.
          ß
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerItems: {
    alignItems: "center",
  },
  image: {
    height: 450,
    width: 300,

    marginTop: 20,
    borderRadius: 7,
  },
  placeHolder: {
    height: 40,
    width: 300,
    backgroundColor: "",
    margin: 15,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    top: 18,
    fontSize: 18,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "",
    borderWidth: 1,
    borderColor: "black",
    margin: 15,
    borderRadius: 40,
    top: 10,
  },
});

export default LogIn;
