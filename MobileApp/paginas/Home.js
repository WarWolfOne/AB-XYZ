import { React, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, View, ScrollView } from "react-native";
import { globalStyles } from "../styles/Global";



export default function Home({ navigation }) {
    return (

        <View style={globalStyles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={globalStyles.card}>
                        <View style={globalStyles.textBox}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ListaProfissionais')}
                                underlayColor={'none'}
                            >
                                <Text style={globalStyles.textTitle}>Procurar Atendimento</Text>
                            </TouchableOpacity>
                            <Text style={globalStyles.textBody}>
                                Encontre profissionais entre
                                psicólogos e psiquiatras.
                            </Text>
                        </View>
                        <TouchableOpacity 
                            style={globalStyles.iconHome}
                            onPress={() => navigation.navigate('ListaProfissionais')}
                        >
                            <Image
                                source={require('./img/lupa.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.card}>
                        <TouchableOpacity 
                            style={globalStyles.iconHome}
                        >
                            <Image
                                source={require('./img/telefone.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                        <View style={globalStyles.textBox}>
                            <TouchableOpacity>
                                <Text style={globalStyles.textTitle}>Agendamentos</Text>
                            </TouchableOpacity>
                            <Text style={globalStyles.textBody}>
                                Para acessar suas próximas
                                consultas.
                            </Text>
                        </View>
                    </View>

                    <View style={globalStyles.card}>
                        <View style={globalStyles.textBox}>
                            <TouchableOpacity>
                                <Text style={globalStyles.textTitle}>Histórico</Text>
                            </TouchableOpacity>
                            <Text style={globalStyles.textBody}>
                                Visualize seus atendimentos
                                anteriores, receituários e observações
                            </Text>
                        </View>
                        <TouchableOpacity style={globalStyles.iconHome}>
                            <Image
                                source={require('./img/saude.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* <View style={globalStyles.card}>
                        <TouchableOpacity style={globalStyles.iconHome}
                            onPress={() => navigation.navigate('SeCuide')}
                        >
                            <Image
                                source={require('./img/paciente.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                        <View style={globalStyles.textBox}>
                            <TouchableHighlight
                                onPress={() => navigation.navigate('SeCuide')}
                                underlayColor={'none'}
                            >
                                <Text style={globalStyles.textTitle}>
                                    Sessões Guiadas
                                </Text>
                            </TouchableHighlight>
                            <Text style={globalStyles.textBody}>
                                Sessões para momentos de
                                crises, como estresse e ansiedade.
                            </Text>
                        </View>
                    </View> */}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};