import React, { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Alert,
  Image,
} from "react-native";

// Komponenten LogIn
const LogIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // funktionen handlelogin,
  const handleLogin = () => {
    if (userName == "mariana" && password == "kalle") {
      setUserName("");
      setPassword("");
      navigation.navigate("Restaurant Search");
    } else {
      Alert.alert("Error", "Wrong Password or User Name", [{ text: "OK" }]);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/9fde2995246431.5e93304946754.jpg")}
        style={styles.image}
      />
      <TextInput
        style={styles.placeHolder}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
        autoCapitalize={false}
      />
      <TextInput
        style={styles.placeHolder}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize={false}
        secureTextEntry={true}
      />
      {/* if({password.length >= 4 && password.length <= 6}){}
      else{} */}
      <View style={styles.button}>
        <Button
          title="Log In"
          onPress={handleLogin}
          color="black"
          disabled={!userName || !password}
          ß
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 450,
    width: 300,

    marginTop: 20,
    borderRadius: 3,
  },
  placeHolder: {
    height: 40,
    width: 300,
    color: "black",
    margin: 15,
    borderWidth: 1,
    padding: 10,
    top: 18,
    fontSize: 18,
  },
  button: {
    width: 300,
    height: 40,
    borderWidth: 2,
    margin: 15,
    borderRadius: 40,
    top: 10,
  },
});

export default LogIn;
