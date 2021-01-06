import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import ContextAuth from "../provider/AuthProvider";


const Logon = ({ navigation }) => {
  const authContext = useContext(ContextAuth);

  const [info, setInfo] = useState({});
  const loginEmail = () => {
    authContext.action
    .signUp(info)
    .then(() => {
      navigation.navigate("home");
    })
    .catch((e) => alert(e.message));
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

        <TextInput
          label="password"
          placeholder="password"
          secureTextEntry
          onChangeText={(text) => {
            setInfo({ ...info, password: text });
          }}
        />
        <View>
          <Button mode="contained" onPress={loginEmail}>
            Cadastrar
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Logon;
