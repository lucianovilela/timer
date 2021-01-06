import React, { useState, useContext } from "react";
import { View, SafeAreaView, Alert } from "react-native";
import { TextInput, Button, Avatar, Text } from "react-native-paper";
import ContextAuth from "../provider/AuthProvider";


const Login = ({ navigation }) => {
  const authContext = useContext(ContextAuth);
  const [info, setInfo] = useState({ email: null, password: null });
  const loginEmail = () => {
    authContext.action
      .signIn( info )
      .then(() => {
        navigation.navigate("home");
      })
      .catch((e) => Alert.alert(e.message));
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItens: "center", justifyContent: "center" }}
    >
      <View>
        <View style={{ alignItems: "center" }}>
          <Avatar.Text size={50} label="US" />
        </View>
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
        </View>
        <View>
          <Button mode="contained" onPress={loginEmail}>
            Login
          </Button>
          {
            // <Button  mode="contained" onPress={loginGoogle}>Google</Button>
            //<Button  mode="contained" onPress={loginFacebook}>Facebook</Button>
          }
        </View>

        <Button
          onPress={() => {
            navigation.navigate("logon");
          }}
        >
          Cadastrar
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("password");
          }}
        >
          Esqueci a senha
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
