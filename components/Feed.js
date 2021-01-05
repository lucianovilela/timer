import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

import dimension from "../constants/Layout";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

const Feed = ({post, user}) => {
  const [comentario, setComentario] = useState("");
  const formatLikesResume=()=>{

  }

  const sendComentario=()=>{

  }

  const formatComentariosResume=()=>{

  }

  console.debug(post, user);
  return (
    
    <View>
      <View style={styles.avatar}>
        <Image
          style={styles.foto_avatar}
          source={{uri:post.userPost.photoURL}}
        />
        <Text style={styles.usuario}>{post.userPost.userName}</Text>
      </View>
      
        <Image
          style={styles.foto}
          source={{uri:post.imagemURL}}
        />

      <View style={styles.icones}>
        <TouchableOpacity onPress="setLike">
          <Ionicons size={30} style={styles.icone} name="ios-beer" />
        </TouchableOpacity>
      </View>
      <View style={styles.uma_linha}>
        <Text style={styles.usuario}>Quem bebeu </Text>
        <Text>{formatLikesResume}</Text>
      </View>
      <View style={styles.uma_linha}>
        <Text style={styles.usuario}>{post.userPost.userName} </Text>
        <Text>{post.descricao}</Text>
      </View>
      <View>
        <Text style={{ flex: 1 }}>Comentários</Text>
        <View >
          {formatComentariosResume}
        </View>
        {user &&
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Comentario" style={{ flex: 1 }} />
          <TouchableOpacity onPress={sendComentario}>
            <Ionicons size={30} name="ios-paper-plane" />
          </TouchableOpacity>
        </View>
        }
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
