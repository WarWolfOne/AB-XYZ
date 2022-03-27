import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../styles/Global";


import SwitchSelector from 'react-native-switch-selector';

export default function ListaProfissionais({navigation}) { 

    const options = [
        { label: '01:00', value: '1' },
        { label: '01:30', value: '1.5' },
        { label: '02:00', value: '2' }
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

