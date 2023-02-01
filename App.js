import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./components/SearchScreen";
import LogIn from "./components/LogIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Restaurant">
        <Stack.Screen name="Restaurant" component={LogIn} />
        <Stack.Screen
          name="Restaurant Search"
          component={SearchScreen}
          options={{ title: "Restaurant Search", headerShown: false }} // med denna option kan man inte
          // navigera tillbaka till login sidan
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   alignItems: "center",
    //  backgroundColor: "lightgrey",
  },
});
