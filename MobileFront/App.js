import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.pizzaImage} source={require('./pizza_logo.png')} />
      <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
      <Text style={styles.newText}>Por 4to, Ing</Text>
      <StatusBar style="auto" />
    </View>
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