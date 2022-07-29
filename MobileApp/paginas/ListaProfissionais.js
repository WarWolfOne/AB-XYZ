import { React, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Text, TextInput, Image, Button, ActivityIndicator, TouchableHighlight, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/Global";

import SwitchSelector from 'react-native-switch-selector';

export default function ListaProfissionais({ navigation }) {

  const options = [
    { label: 'Psicólogos', value: '1' },
    { label: 'Psiquiatras', value: '2' },
  ];
  //options é a constante obrigatória a ser usada no 'react-native-switch-selector'
  //para determinar a label do selletor.e

  const [DATA, setData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.0.101:8080/profissionais')
      .then(response => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
  }, []);

  return (

    <View style={globalStyles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={globalStyles.selectView}>
            <SwitchSelector
              height={50}
              buttonColor={'#0055E3'}
              backgroundColor={'#DCE9F6'}
              borderColor={'#0055E3'}
              options={options} initial={0}
              onPress={value => console.log(`Call onPress with value: ${value}`)}
            />
          </View>

          <FlatList
            data={DATA}
            keyExtractor={(item, index) => { return item.id.toFixed() }}
            renderItem={({ item, index }) => (
              <View style={globalStyles.cardList}>
                <View style={globalStyles.textBox}>
                  <Text style={globalStyles.textTitle}>{item.nome}</Text>
                  <View>
                    <View style={globalStyles.inLine}>
                      <Text style={globalStyles.textHighlight}>CRP: </Text>
                      <Text>{item.CRP} </Text>
                      <Text style={globalStyles.textHighlight}>1h </Text>
                      <Text>{item.valorHora} R$</Text>
                    </View>
                  </View>
                </View>
                <View style={globalStyles.textBoxFull}>
                  <Text style={globalStyles.textHighlight}>Especialidades: </Text>
                  <View style={globalStyles.inLine}>
                    <Text style={globalStyles.textTag}>{item.especialidade1}</Text>
                    <Text style={globalStyles.textTag}>{item.especialidade2}</Text>
                    <Text style={globalStyles.textTag}>{item.especialidade3}</Text>
                  </View>
                </View>
                <View style={globalStyles.textBoxFull}>
                  <Text style={globalStyles.textHighlight}>Sobre: </Text>
                  <Text
                    //style={globalStyles.textBody}
                    numberOfLines={5} //Numero maximo de linhas.
                  >
                    {item.descricao}
                  </Text>
                </View>

                <View style={globalStyles.center}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PerfilProfissional', {
                      item: item,
                    })
                    } //Atraves da função navigation é passado o nome da rota em que será seguida, no caso a pagina de perfil do profissional.
                  //Atraves da funç]ão, sera passado os dados para outra tela pelo objeto "item" que recebe o item da Flatlist.
                  >
                    <Text style={globalStyles.inLineButtons}>Ver Perfil</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};