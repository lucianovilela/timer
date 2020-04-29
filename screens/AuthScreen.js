import { View, Text, TextInput, Button, Alert,AsyncStorage } from "react-native";


import React, { useState, useEffect, useRef } from "react";

import ProviderFirebase from "../providers/ProviderFirebase";
import  PERSISTENCE from  "../constants/Persistence";


const AuthScreen = ({ navigation }) => {

  const [user, setUser] = useState({});
  const provider= useRef();


  useEffect( ()=>{
      provider.current =  new ProviderFirebase("/user");
  },[]);
 
  const usuarioLogadoComSucesso= async()=>{
   // Alert.alert("Logado", "Usuário logado com sucesso!")
    const user = await provider.current.currentUser();
    await AsyncStorage.setItem(PERSISTENCE.USER,   JSON.stringify(user) );
    await AsyncStorage.setItem(PERSISTENCE.TOKEN, await provider.current.getToken());
    setUser(user);
    
  }

  const login = async ()=>{
    const msg = await provider.current.loginUser(info.email, info.senha);
 
    if(msg.operationType === "signIn")
        usuarioLogadoComSucesso();
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
            setInfo({...info, senha:text});
          }}
        />
      </View>
      <View>
        <Button title="entrar" onPress={login} />
      </View>
    </React.Fragment>
  );
};

export default AuthScreen;
