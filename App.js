import React from 'react';
import Profile from './new/profile.js';
import Login from './new/login.js';
import Id from './new/id.js';
import Home from './new/home.js';
import detailMovie from './new/detailMovie.js';
import sigup from './new/sigup.js';
import watchlist from './new/watchlist.js';
import Serimovie from './new/serimovie.js';
import Sreachscrenn from './new/sreachscrenn.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import serimovie from './new/serimovie.js';
import picklove from './new/picklove.js';
import viewall from './new/viewall.js';

import { BiBorderRadius } from 'react-icons/bi';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "white",
        "tabBarInactiveTintColor": "gray",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ],
        tabBarStyle: {
          backgroundColor: 'black',

        },
        headerShown: false

      }}>
       <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <FontAwesome6 name='house-user' color={color} size={size} />,
          style: {


          },
        }} />
      <Tab.Screen name="picklove" component={picklove}
        options={{
          tabBarLabel: "Yêu thích",
          tabBarIcon: ({ color, size }) => <FontAwesome6 name='heart' color={color} size={size} />,
          style: {
            backgroundColor: 'green',
          },
        }}
      />
     <Tab.Screen name="WactchList" component={watchlist}
        options={{
          tabBarLabel: "Xem sau",
          tabBarIcon: ({ color, size }) => <FontAwesome6 name='book' color={color} size={size} />,
          style: {
            backgroundColor: 'green',
          },
        }} />

    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Serimovie" component={serimovie} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sigup" component={sigup} />
      <Stack.Screen name="HomeStack" component={MyTabs} />
      <Stack.Screen name="WatchList" component={watchlist} />
      <Stack.Screen name="Id" component={Id} />
      <Stack.Screen name="picklove" component={picklove} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DetailMovie" component={detailMovie} />
      <Stack.Screen name="Sreachscrenn" component={Sreachscrenn} />
      <Stack.Screen name="Viewall" component={viewall} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
