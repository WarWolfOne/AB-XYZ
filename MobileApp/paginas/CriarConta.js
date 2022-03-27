import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableHighlight, View, ScrollView, Picker} from "react-native";
import { globalStyles } from "../styles/Global";

export default function CriarConta({navigation}) {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={globalStyles.criarContainer}>
    <SafeAreaView style={globalStyles.cardClear}>
    <ScrollView>
      <Text style={styles.Login}>Criar Conta</Text>
      <TextInput
        style={globalStyles.input}
        onChangeText={value => setEmail(value)}
        placeholder="Nome Completo" // tipo de teclado.
       // value={eMail}
      />
      <TextInput
        style={globalStyles.input}
        onChangeText={value => setSenha(value)}
        placeholder="Data de Nascimento"
        keyboardType="text" // tipo de teclado.
        secureTextEntry={true} // fazer que o texto da senha fique oculto.
       // value={senha}
      /><TextInput
      style={globalStyles.input}
      onChangeText={value => setEmail(value)}
      placeholder="Telefone" // tipo de teclado.
     // value={eMail}
    />
    <TextInput
      style={globalStyles.input}
      onChangeText={value => setSenha(value)}
      placeholder="CPF"
      keyboardType="text" // tipo de teclado.
      secureTextEntry={true} // fazer que o texto da senha fique oculto.
     // value={senha}
    />
    <TextInput
      style={globalStyles.input}
      onChangeText={value => setSenha(value)}
      placeholder="Senha"
      keyboardType="text" // tipo de teclado.
      secureTextEntry={true} // fazer que o texto da senha fique oculto.
     // value={senha}
    />
    <TextInput
        style={globalStyles.input}
        onChangeText={value => setSenha(value)}
        placeholder="Confirmar"
        keyboardType="text" // tipo de teclado.
        secureTextEntry={true} // fazer que o texto da senha fique oculto.
       // value={senha}
      />
    <View style={globalStyles.btnDiv}>
      
      <TouchableHighlight style={globalStyles.btn}>
        <Text style={globalStyles.btnText}>Criar Conta</Text>
      </TouchableHighlight>
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    fontSize: 34,
    margin: 10,
    color: '#0149C1',
  },
  esqueceu: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0149C1',
    margin: 10,
    marginHorizontal: 20,
  },
  pSaude: {
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0149C1',
    marginTop: 26,
    marginBottom: 10,
  },

});