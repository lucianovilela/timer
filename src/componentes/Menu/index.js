import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from "react-native-paper";
import SafeAreaView from "react-native-safe-area-view";

const Menu= ({ navigation }) => {
    const [active, setActive] = React.useState("");

    return (
    <SafeAreaView>
      <Drawer.Section title="Template de login">
        <Drawer.Item
          label="Login"
          active={active === "first"}
          onPress={() => {
            navigation.navigate("login");
            setActive("first");
          }}
        />
        <Drawer.Item
          label="Home"
          active={active === "second"}
          onPress={() => {
            navigation.navigate("home");
            setActive("second");
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
  )
}

export default Menu;
const styles = StyleSheet.create({})
