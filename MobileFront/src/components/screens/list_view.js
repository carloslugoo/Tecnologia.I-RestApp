import { StyleSheet, Text, Image, SafeAreaView, Button, FlatList } from 'react-native';
import React, { Component } from "react";

import client from "../../api/client";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    client.get("/").then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    const mytext = "Por 4to, Ing";
    const { data } = this.state;

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