import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/login/Login';
import CameraScreen from '../screens/CameraScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flame" />,
        }
        }/>

        <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: 'Camera',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flame" />,
        }
        }/>

      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-log-in" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Cerveja';
    case 'Camera':
      return 'Foto'
    case 'Login':
      return 'Login';
  }
}


