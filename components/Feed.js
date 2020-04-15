import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import dimension from "../constants/Layout";
import { TouchableOpacity } from 'react-native-gesture-handler';

 const Feed=(props)=> {
    return(
        <View >
            <View style={styles.avatar}>
                <Image style={styles.foto_avatar} source={require("../assets/images/barney.png")}/>
                <Text style={styles.usuario}>{props.userName}</Text>
            </View>
            <Image style={styles.foto}  source={require("../assets/images/beer.jpg")}/>
            <View style={styles.icones}>
                <TouchableOpacity>
                <Ionicons size={30} style={styles.icone} name="ios-heart-empty"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons size={30} style={styles.icone} name="ios-beer"/>
                </TouchableOpacity>
            </View>
            <View style={styles.uma_linha}>
                <Text style={styles.usuario}>Curtidas  </Text><Text>Quem curtiu e quem bebeu</Text>
            </View>
            <View style={styles.uma_linha}>
                <Text style={styles.usuario}>{props.userName}  </Text><Text>Descricao da imagem</Text>
            </View>
            <View style={styles.uma_linha}>
                <Text style={{fontSize:10}}>Quanto tempo</Text>
            </View>
        </View>


    );

}

const styles = StyleSheet.create({
    uma_linha:{
        flexDirection:"row"
    },
    foto: {
        width:dimension.window.width,
        height:dimension.window.width,
        borderColor:"#fff"
    },
    avatar:{
        flexDirection:'row',
        alignContent:"stretch"

    },
    foto_avatar: {
        width:30,
        height:30,
        borderRadius:30,
        margin:"10, 10, 10,10"
    },

    icones:{
        flexDirection:'row',
    },
    icone:{
        width:50,
        height:35,
        margin:"10,0,0"
    },
    usuario:{
        fontWeight:"bold"
    }
})

export default Feed;