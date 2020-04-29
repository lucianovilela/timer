import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
} from "react-native";

import dimension from "../constants/Layout";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import CervejaModal from "./CervejaModal";

const Feed = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <CervejaModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.avatar}>
        <Image
          style={styles.foto_avatar}
          source={require("../assets/images/barney.png")}
        />
        <Text style={styles.usuario}>{props.userName}</Text>
      </View>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image
          style={styles.foto}
          source={require("../assets/images/beer.jpg")}
        />
      </TouchableHighlight>

      <View style={styles.icones}>
        <TouchableOpacity>
          <Ionicons size={30} style={styles.icone} name="ios-beer" />
        </TouchableOpacity>
      </View>
      <View style={styles.uma_linha}>
        <Text style={styles.usuario}>Curtidas </Text>
        <Text>Quem curtiu e quem bebeu</Text>
      </View>
      <View style={styles.uma_linha}>
        <Text style={styles.usuario}>{props.userName} </Text>
        <Text>Descricao da imagem</Text>
      </View>
      <View style={styles.uma_linha}>
        <Text style={{ fontSize: 10 }}>Quanto tempo</Text>
      </View>
      <View>
        <Text style={{ flex: 1 }}>Comentários</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Comentario" style={{flex:1}} />
          <Ionicons size={30} name="ios-paper-plane" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uma_linha: {
    flexDirection: "row",
  },
  foto: {
    width: dimension.window.width,
    height: dimension.window.width,
    borderColor: "#fff",
  },
  avatar: {
    flexDirection: "row",
    alignContent: "stretch",
  },
  foto_avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },

  icones: {
    flexDirection: "row",
  },
  icone: {
    width: 50,
    height: 35,
  },
  usuario: {
    fontWeight: "bold",
  },
});

export default Feed;
