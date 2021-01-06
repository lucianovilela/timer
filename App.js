import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";


import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthScreen from "./src/screen/AuthScreen";
import { AuthProvider } from "./src/provider/AuthProvider";
import Home from "./src/screen/Home";

import Menu from './src/componentes/Menu'

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {

  //console.debug(ContextAuth.userToken);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <AuthProvider>
            < StatusBar />
            <Drawer.Navigator
              initialRouteName="home"
              drawerContent={( props )=><Menu {...props} />}
            >
              <Drawer.Screen
                name="login"
                component={ AuthScreen }
                options={{ headerShown: false }}
              />
              <Drawer.Screen name="home" component={ Home } />
            </Drawer.Navigator>
          </AuthProvider>
        
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
