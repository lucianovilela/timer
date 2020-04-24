import { View, Text, TextInput, Button, Alert,ToastAndroid } from "react-native";


import React, { useState, useEffect } from "react";

import ProviderFirebase from "../providers/ProviderFirebase";

const LoginScreen = (props) => {
  const provider=ProviderFirebase.getInstance("/user");

  const [user, setUser] = useState({});
 
  const usuarioLogadoComSucesso=()=>{
    Alert.alert("Logado", "Usuário logado com sucesso!")
    setUser(provider.currentUser());
  }

  const login = ()=>{
    provider.loginUser(info.email, info.senha)
    .then((msg)=>{
        console.debug(msg);
       if(msg.operationType === "signIn")
           usuarioLogadoComSucesso();
    
    })
    .catch((e)=>{console.debug(e)});

  }
  const logon = ()=>{
    provider.logonUser(info.email, info.senha)
    .then((user)=>{
        console.debug(msg);
       if(msg.operationType === "signIn")
           usuarioLogadoComSucesso();
    })
    .catch((e)=>{console.debug(e)});

  }
  const reset = ()=>{
      provider.resetPassword(info.email)
      .then((msg)=>{console.debug(msg)});
  }
  const [info, setInfo] = useState({email:"lucianovilela@gmail.com", senha:"123456"});

  return (
    <React.Fragment>
        <View>
            <Text>Usuario:{user?
                   user.displayName?user.displayName:user.email
                :''}</Text>
        </View>
      <View style={{justifyContent:"center"}}>
        <TextInput
          name="email"
          placeholder="email"
          value={info.email}
          
          onChangeText={( text ) => {
            console.debug(text);
            setInfo({...info, email:text});
          }}
        />
        <TextInput
          name="senha"
          placeholder="password"
          type="password"
          value={info.senha}
          secureTextEntry
          onChangeText={( text ) => {
            console.debug(text);
            setInfo({...info, senha:text});
          }}
        />
      </View>
      <View>
        
        <Button title="entrar" onPress={login} />
        <Button title="cadastrar" onPress={logon} />
        <Button title="esqueceu a senha" onPress={reset}/>
        <Button title="alert" onPress={ ()=>{
            console.debug("alert");
            Alert.alert("ok", "ok")}}/>
      </View>
    </React.Fragment>
  );
};

export default LoginScreen;
