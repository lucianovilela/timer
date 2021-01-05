import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
} from "react-native";

import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import ProviderFirebase from "../providers/ProviderFirebase";

import { SAIR } from "../redux/actions";

const AuthScreen = ({ navigation }) => {
  const [user, logado] = useSelector((state) => [
    state.auth.user,
    state.auth.logado,
  ]);

  const provider = useRef();
  const dispactch = useDispatch();

  useEffect(() => {
    provider.current = new ProviderFirebase("/user");
  }, []);

  const login = async () => {
    const msg = await provider.current.loginUser(info.email, info.senha);
    console.debug(msg);
  };

  const logout = async () => {
    await provider.current.logoutUser();
    dispactch(SAIR());
  };
  const [info, setInfo] = useState({
    email: user ? user.email : "",
    senha: "",
  });

  return (
    
    <React.Fragment style={{justifyContent:'center', alignItens:'center' }}>
      {console.debug(logado)}
      {!logado ? (
        <React.Fragment>
          <View style={{ justifyContent: "center" }}>
            <TextInput
              name="email"
              placeholder="email"
              value={info.email}
              onChangeText={(text) => {
                setInfo({ ...info, email: text });
              }}
            />
            <TextInput
              name="senha"
              placeholder="password"
              type="password"
              value={info.senha}
              secureTextEntry
              onChangeText={(text) => {
                setInfo({ ...info, senha: text });
              }}
            />
          </View>

          <View>
            <Button title="entrar" onPress={login} />
          </View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <View>
            <Button title="logout" onPress={logout} />
          </View>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AuthScreen;
