import { React, useState } from "react";
import { StyleSheet,  SafeAreaView, View, TextInput, Button, TouchableHighlight, TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/Global";

export default function Login({ navigation }) {
  //parametro da propriedade navigate para a navegação entre telas.

  const [eMail, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <View style={globalStyles.loginContainer}>
      <SafeAreaView style={globalStyles.cardLogin}>
        <Text style={styles.Login}>Login</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={value => setEmail(value)}
          placeholder="E-Mail" // tipo de teclado.
          value={eMail}
        />
        <TextInput
          style={globalStyles.input}
          onChangeText={value => setSenha(value)}
          placeholder="Senha"
          keyboardType="text" // tipo de teclado.
          secureTextEntry={true} // fazer que o texto da senha fique oculto.
          value={senha}
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
          <TouchableHighlight
            onPress={() => navigation.navigate('CriarConta')}
            underlayColor={'none'} //Cor do toque.
          >
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