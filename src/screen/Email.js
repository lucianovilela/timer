import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import * as firebase from "../provider/firebase";

const Email = ({ navigation }) => {
  const [info, setInfo] = useState({});
  const loginEmail = () => {
    firebase(info).loginEmail(info).then((result) => {
      console.log(result);
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
    >
      <View>
        <TextInput
          label="email"
          placeholder="email"
          onChangeText={(text) => {
            setInfo({ ...info, email: text });
          }}
        />

        <View>
          <Button mode="contained" onPress={loginEmail}>
            Recuperar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Email;
