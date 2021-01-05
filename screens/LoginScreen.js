import { View, Text, TextInput, Button, Alert,ToastAndroid } from "react-native";


import React, { useState, useEffect } from "react";

import ProviderFirebase from "../providers/ProviderFirebase";

const AuthScreen = (props) => {
  const provider=ProviderFirebase.getInstance("/user");

  const [user, setUser] = useState({});
 
  const usuarioLogadoComSucesso=()=>{
    Alert.alert("Logado", "Usuário logado com sucesso!")
    setUser(provider.currentUser());
  }

  const login = async ()=>{
    const msg = await provider.loginUser(info.email, info.senha);
    console.warn(msg);
    if(msg.operationType === "signIn")
        usuarioLogadoComSucesso();
    
    
  }
  const logon = async ()=>{
    const msg = await provider.logonUser(info.email, info.senha);
    console.debug(msg);
    if(msg.operationType === "signIn")
        usuarioLogadoComSucesso();

  }
  const reset = async ()=>{
    const msg = await provider.resetPassword(info.email);
    console.debug(msg);
  }
  const [info, setInfo] = useState({email:"lucianovilela@gmail.com", senha:"123456"});

  return (
    <React.Fragment style={{justifyContent:'center', alignItem:'true'}}>
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
      </View>
    </React.Fragment>
  );
};

export default AuthScreen;
