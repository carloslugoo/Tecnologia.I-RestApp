import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './assets/Home';
import NoticiaScreen from './assets/noticia_detalle';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={App} />
        <Stack.Screen name="Noticia" component={NoticiaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;