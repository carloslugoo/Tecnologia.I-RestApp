import { StyleSheet, Text, Image, SafeAreaView, Button, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";

import client from "../../api/client";

const ListView = () => {
  const [data, setData] = useState([]);

  const getList = async () => {
    try {
      const response = await client.get("/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const mytext = "Por 4to, Ing";

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.pizzaImage} source={require('../../images/pizza_logo.png')} />
      <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
      <Text style={styles.newText}>{mytext}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.pizzeria_name}, {item.city}</Text>
        )}
      />
      <Button title="Mas detalles.." onPress={() => this.props.navigation.navigate("Detail")} />
    </SafeAreaView>
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
  newText: {
    color: "red",
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "green",
    fontSize: 20,
  },
});

export default ListView;