import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import ProviderFirebase from "./providers/ProviderFirebase";

import { useSelector, useDispatch } from 'react-redux';
import { LOGAR } from './redux/actions';


const Stack = createStackNavigator();

export default function RootApp(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const provider = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const user = useSelector(state => state.auth.user );
  const dispatch = useDispatch();

  const onAuthChange=(userLogado)=>{
       dispatch(LOGAR(userLogado));
       
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });

        provider.current = new  ProviderFirebase("/");
        provider.current.onLoginChange(onAuthChange);
        

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}   >
            <Stack.Navigator  >
              <Stack.Screen name="Root" component={BottomTabNavigator}  />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

