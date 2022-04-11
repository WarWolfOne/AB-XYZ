import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../styles/Global";


import SwitchSelector from 'react-native-switch-selector';

export default function ListaProfissionais({navigation}) { 

    const options = [
        { label: 'Psicólogos', value: '1' },
        { label: 'Psiquiatras', value: '2' },
        { label: 'Geral', value: '3' }
    ];

    return (

        <View style={globalStyles.container}>
        <SafeAreaView>
        <ScrollView>

        <View style={globalStyles.select}>
            <SwitchSelector
                height={50}
                buttonColor={'#0055E3'}
                backgroundColor={'#fff'}
                borderColor={'#0055E3'}
                options={options} initial={0} 
                onPress={value => console.log(`Call onPress with value: ${value}`)} 
        />
        </View>

        </ScrollView>
        </SafeAreaView>
        </View>
        
    );
};

