import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import dimension from "../constants/Layout";
import { TouchableOpacity } from 'react-native-gesture-handler';


const Teste=(props)=>{

    return(<View>
        <Text>{props.resposta}</Text>


    </View>);
}

export default Teste;