import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./paginas/Login";
import CriarConta from "./paginas/CriarConta"

//<Stack.Navigator initialRouteName="Home"> //Para definir a tela inicial.

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CriarConta" component={CriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}