import React, { useContext } from "react";
import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import ContextAuth from "../provider/AuthProvider";
import SafeAreaView from "react-native-safe-area-view";

const Home = ({ navigation }) => {
  const authContext = useContext(ContextAuth);
  const user = authContext.state.user;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      
      <View>
        <Text>Home</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
        <Image source={{ uri: user?.photoURL }} width={50}></Image>
        <Button
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          Open
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
