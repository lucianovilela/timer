import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Logon from "./Logon";
import Password from "./Password";

const Stack = createStackNavigator();

export default function AuthScreen({ navigation }) {
  
  return (
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="logon" component={Logon} />
          <Stack.Screen name="password" component={Password} />
        </Stack.Navigator>
  );
}
