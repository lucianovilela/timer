import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import LoginScreen from '../screens/LoginScreen';
import CameraScreen from '../screens/CameraScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({  headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,

        }
        }/>

        <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: '',
          headerTitle:'Foto',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-add-circle-outline" />,
          tabBarVisible:false
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


