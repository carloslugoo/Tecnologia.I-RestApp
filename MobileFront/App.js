import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import ListView from "./src/components/screens/list_view";
import ListView from "./src/components/screens/function_list_view";
import DetailView from "./src/components/screens/detail_view";
const Stack = createStackNavigator();

import ScreenA from "./src/components/drawer/screenA.js";
import ScreenB from "./src/components/drawer/screenB.js";
import ScreenC from "./src/components/drawer/screenC.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOne from "./src/components/tabs/tab1.js";
import TabTwo from "./src/components/tabs/tab2.js";
const Tab = createBottomTabNavigator();

const renderTabComponents = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab 1" component={TabOne} />
    <Tab.Screen name="Tab 2" component={TabTwo} />
  </Tab.Navigator>
);

const renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView}/>
    <Stack.Screen name="Tabs" children={renderTabComponents} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={renderScreenComponents} />
        <Drawer.Screen name="Screen A" component={ScreenA} />
        <Drawer.Screen name="Screen B" component={ScreenB} />
        <Drawer.Screen name="Screen C" component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText:{
    color: "red",
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
});