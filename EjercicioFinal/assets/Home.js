import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://www.uci.edu.py/uciweb/public/api/lista/';

const Inicio = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL + pageNumber);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = (id) => {
    navigation.navigate('Noticia', { id });
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (

    <View style={styles.container}>
        if (pageNumber == 0){
            <View>
            <Text style={styles.titulo}>Noticias de UCI - ITAPUA</Text>
            </View>
        }
   
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Image style={styles.imagen} source={{ uri: item.imagen.replace(/\\\//g, '/') }} />
          <Text style={styles.fecha}>Fecha: {item.fecha}</Text>
          <Text style={styles.autor}>Autor: {item.autor}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(item.id)}>
            <Text style={styles.buttonText}>Ver Noticia</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.paginationButtons}>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={goToPreviousPage}>
          <Text style={styles.paginationButtonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={goToNextPage}>
          <Text style={styles.paginationButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
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
    width: 500,
    height: 500,
    marginBottom: 10,
  },
  titulo: {
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
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paginationButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  paginationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Inicio;
