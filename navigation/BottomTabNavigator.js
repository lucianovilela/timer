import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { useSelector } from "react-redux";

import TabBarIcon from "../components/TabBarIcon";
import FeedScreen from "../screens/FeedScreen";
import AuthScreen from "../screens/AuthScreen";
import CameraScreen from "../screens/CameraScreen";

import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

const UserTitle = ({ user, logado }) => {
  return (
    <View>
      <View style={{flexDirection:"row", }}>
        <Text>Cervejas que bebi</Text>
      </View>
      {user ? (
        <View>
          {user.photoURL?
          <Image size={20} source={{uri:user.photoURL}} />
          :
          <Image size={20} source={require("../assets/images/anonimo.png")} />
          }
          <Text>{user.displayName?user.displayName:user.email}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerTitle: (props) => (
      <UserTitle {...props} user={user} logado={logado} />
    ),
  });
  const [user, logado] = useSelector((state) => [
    state.auth.user,
    state.auth.logado,
  ]);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={FeedScreen}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: "",
          headerTitle: "Foto",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-add-circle-outline" />
          ),
          tabBarVisible: false,
        }}
      />

      <BottomTab.Screen
        name="Login"
        component={AuthScreen}
        options={{
          title: "Login",

          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-log-in" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Cerveja";
    case "Camera":
      return "Foto";
    case "Login":
      return "Login";
  }
}
