import { React, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Text, TextInput, Image, Button, ActivityIndicator, TouchableHighlight, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/Global";
import { useRoute } from "@react-navigation/native";

export default function PerfilProfissional({ route }) {
    //A Função recebe os dados da tela anterior atraves do destructor route.
    //e os dados são extraidos pela constante "data que recebe os parametro do objeto "item" da tela anterior.
    const data = route.params.item;
    console.log(data);
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Text>Nome {data.nome}</Text>
                    <Text>Informações:</Text>
                    <View style={globalStyles.inLine}>
                        <Text>CRP: </Text>
                        <Text>{data.CRP} </Text>
                        <Text>1h: </Text>
                        <Text>{data.valorHora}R$</Text>
                    </View>
                    <View style={globalStyles.inLine}>
                        <Text style={globalStyles.textTag}>{data.especialidade1}</Text>
                        <Text style={globalStyles.textTag}>{data.especialidade2}</Text>
                        <Text style={globalStyles.textTag}>{data.especialidade3}</Text>
                    </View>
                    <Text>Sobre: </Text>
                    <Text>{data.descricao}</Text>
                    <Text>Marcar:</Text>
                    <View style={globalStyles.center}>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};