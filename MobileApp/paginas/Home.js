import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../styles/Global";



export default function Home({navigation}) { 
    return (

        <View style={globalStyles.container}>
            <SafeAreaView>
                <ScrollView>
                    
                    <View style={globalStyles.card}>
                        <View  style={globalStyles.textBox}>
                            <TouchableHighlight
                                onPress={() => navigation.navigate('ListaProfissionais')}
                                underlayColor={'none'}
                            >
                                <Text style={globalStyles.titulo}>
                                    Procurar Atendimento
                                </Text>
                            </TouchableHighlight>
                            <Text>Encontre profissionais entre 
                            psicólogos e psiquiatras.</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={globalStyles.icon}>
                                <Image 
                                    source={require('./img/lupa.png')}
                                    style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={globalStyles.card}>
                        <View>
                            <TouchableOpacity style={globalStyles.icon}>
                                <Image 
                                    source={require('./img/telefone.png')}
                                    style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyles.textBox}>
                            <TouchableHighlight>
                                <Text style={globalStyles.titulo}>
                                    Agendamentos
                                </Text>
                            </TouchableHighlight>
                            <Text>Para acessar suas próximas
                                consultas.
                            </Text>
                        </View>
                    </View>

                    <View style={globalStyles.card}>
                        <View style={globalStyles.textBox}>
                            <TouchableHighlight>
                                <Text style={globalStyles.titulo}>Histórico</Text>
                            </TouchableHighlight>
                            <Text>Visualize seus atendimentos 
                                anteriores, receituários e observações
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={globalStyles.icon}>
                                <Image 
                                    source={require('./img/saude.png')}
                                    style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={globalStyles.card}>
                        <View>
                            <TouchableOpacity style={globalStyles.icon}
                                onPress={() => navigation.navigate('SeCuide')}
                            >
                                <Image 
                                    source={require('./img/paciente.png')}
                                    style={{ width: 60, height: 60 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyles.textBox}>
                            <TouchableHighlight
                                onPress={() => navigation.navigate('SeCuide')}
                                underlayColor={'none'}
                            >
                                <Text style={globalStyles.titulo}>
                                    Sessões Guiadas
                                </Text>
                            </TouchableHighlight>
                            <Text>Sessões para momentos de 
                                crises, como estresse e ansiedade. 
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>

    );
};