import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableHighlight, View} from "react-native";
import { globalStyles } from "../styles/Global";

export default function CriarConta({navigation}) {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={globalStyles.container}>
    <SafeAreaView style={globalStyles.card}>
      <Text style={styles.Login}>Login</Text>
      <TextInput
        style={globalStyles.input}
        onChangeText={onChangeText}
        placeholder="E-Mail"
        value={text}
      />
      <TextInput
        style={globalStyles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Senha"
        keyboardType="text"
      />
    <View style={globalStyles.left}>
      <TouchableHighlight>
      <Text style={styles.esqueceu}>Esqueceu a senha?</Text>
      </TouchableHighlight>
    </View>
    <View style={globalStyles.btnDiv}>
      <TouchableHighlight style={globalStyles.btn}>
        <Text style={globalStyles.btnText}>Entrar</Text>
      </TouchableHighlight>
    </View>
    <View style={globalStyles.btnDiv}>
      <TouchableHighlight>
        <Text style={globalStyles.btnTextInLine}>Criar Conta</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.pSaude}>
      <TouchableHighlight>
        <Text style={globalStyles.btnTextInLine}>Login para Profissionais de Saúde</Text>
      </TouchableHighlight>
    </View>
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