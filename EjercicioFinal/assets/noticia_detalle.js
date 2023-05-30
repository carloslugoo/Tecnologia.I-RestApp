import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import axios from 'axios';
import HTML from 'react-native-render-html';

const NoticiaScreen = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState([]);
  const API_URL = "https://www.uci.edu.py/uciweb/public/api/noticia/" + id;
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Image style={[styles.imagen, { width: windowWidth }]} source={{ uri: item.imagen.replace(/\\\//g, '/') }} />
          <HTML source={{ html: item.noticia }} />
          <Text style={styles.autor}>Autor: {item.autor}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    width: 500,
  },
  imagen: {
    height: 500,
    alignSelf: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fecha: {
    fontSize: 16,
    marginBottom: 5,
  },
  autor: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NoticiaScreen;
