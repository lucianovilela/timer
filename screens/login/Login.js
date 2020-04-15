import { View, Text, TextInput, Button }  from "react-native"

import React, { useState } from 'react';

import Provider from "../../providers/Provider";


const Login = (props) => {
    const [infoLogin, setInfoLogin] = useState({ email: '', senha: '' });
    const provider = new Provider();
    return (
        <View>

            <View>
                <TextInput
                    placeholder="email"
                    type="email"
                    value={infoLogin.email}
                />
                <TextInput
                    placeholder="password"
                    type="password"
                    value={infoLogin.email}
                />
                <Button expand="full" title="entrar" onPress={provider.loginUser(infoLogin.email, infoLogin.senha)}/>
                <Button title="cadastrar"/>
                <Button title="Esqueceu a senha"/>


            </View>
        </View>
    );
}

export default Login;