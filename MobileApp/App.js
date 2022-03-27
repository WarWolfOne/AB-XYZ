import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./paginas/Login";
import CriarConta from "./paginas/CriarConta"
import Home from "./paginas/Home";
import SeCuide from "./paginas/SeCuide";
import ListaProfissionais from "./paginas/ListaProfissionais";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

//<Stack.Navigator initialRouteName="Home"> //Para definir a tela inicial.

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0149C1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CriarConta" component={CriarConta} 
          options={{
            title: 'Criar Conta',
          }}
        />
        <Stack.Screen name="SeCuide" component={SeCuide} 
          options={{
            title: 'Se Cuide',
          }}
        />
        <Stack.Screen name="ListaProfissionais" component={ListaProfissionais} 
          options={{
            title: 'Procurar Atendimento',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}