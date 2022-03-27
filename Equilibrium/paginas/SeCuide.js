import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, View, ScrollView} from "react-native";
import { globalStyles } from "../styles/Global";



export default function SeCuide({navigation}) { 
    return (
        <View style={styles.box}>
            <Text style={styles.texto}>Works in progress!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
      alignItems: 'center',
      marginVertical: '50%',
    },
    texto: {
      fontSize: 26,
      color: '#0149C1',
    },
  
  });