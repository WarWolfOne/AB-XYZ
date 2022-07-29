import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./paginas/Login";
import CriarConta from "./paginas/CriarConta";
import Home from "./paginas/Home";
import SeCuide from "./paginas/SeCuide";
import ListaProfissionais from "./paginas/ListaProfissionais";
import PerfilProfissional from "./paginas/PerfilProfissional";

//<Stack.Navigator initialRouteName="Home"> //Para definir a tela inicial.

export default function App() {

  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

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
        {/* <Stack.Screen name="SeCuide" component={SeCuide}
          options={{
            title: 'Se Cuide',
          }}
        /> */}
        <Stack.Screen name="ListaProfissionais" component={ListaProfissionais}
          options={{
            title: 'Procurar Atendimento',
          }}
        />
        <Stack.Screen name="PerfilProfissional" component={PerfilProfissional}
          options={{
            title: 'Perfil',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}