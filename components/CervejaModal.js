import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { TouchableHighlight, View, StyleSheet, Image, Text, Alert } from 'react-native';
import { AnimatedModal } from 'react-native-modal-animated';
import dimension from "../constants/Layout";

const CervejaModal=(props) =>{
    return (
        <AnimatedModal 
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
        >
            
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cerveja</Text>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                }}
              >
                <View style={{flex:2}}>
                  <Text>Nome:</Text>
                  <Text>Chopp</Text>
                  <Text>Tipo</Text>
                  <Text>Chopp</Text>

                </View>

              </TouchableHighlight>
            </View>
          </View>
        </AnimatedModal>
  
    );
  }

  const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width:dimension.window.width
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
  export default CervejaModal;