import React,{component} from 'react';

import Profile from "../screen/profile.js";
import Login from '../screen/login.js';
import Id from '../screen/id.js';
import Home from '../screen/home.js';
import detailMovie from '../screen/detailMovie.js';
import sigup from '../screen/sigup.js';
import watchlist from '../screen/watchlist.js';
import Sreachscrenn from '../screen/sreachscrenn.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import serimovie from '../screen/serimovie.js';
import picklove from '../screen/picklove.js';
import viewall from '../screen/viewall.js';
import {ModalSigup} from '../Component/ModalSigup.js';
import ListEmpisodes from '../Component/ListEpisodes.js';
import ListView from '../Component/ListView.js';
import store from "../Redux/store.js";
//importing the provider from react-redux  
import { Provider } from 'react-redux'
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
    <Stack.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
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
      <Stack.Screen name="Viewall" component={viewall}/>
      <Stack.Screen name="ModalSigup" component={ModalSigup}/>
      <Stack.Screen name="ListView" component={ListView}/>
    </Stack.Navigator>
  );
}

export default function RootComponent() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
