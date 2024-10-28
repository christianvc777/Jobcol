import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button'; // Asegúrate de importar el componente Button

const Filters = ({ navigation }) => {
  const handleCategoryClick = () => {
    console.log('Category clicked');
  };

  const handleNearbyClick = () => {
    console.log('Nearby clicked');
    navigation.navigate('P6Screen');
  };

  return (
    <>
      <View style={styles.view6}>
        <Text style={styles.text}>Selecciona los filtros</Text>
      </View>
      <Button
        label="Categoria"
        style={styles.button}
        onPress={handleCategoryClick}
      />
      <Button
        label="Cercano a mi"
        style={styles.button}
        onPress={handleNearbyClick}
      />
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b16de14c260319f04578317848df9c94976e672d2bacdbd93afa8ec7ab0af81?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
        }}
        style={styles.image6}
      />
    </>
  );
};

const styles = StyleSheet.create({
  view6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "System", // Cambiado a fuente del sistema
    marginTop: 28,
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  button: {
    marginTop: 20, // Ajusta el margen superior según sea necesario
  },
  image6: {
    position: "relative",
    display: "flex",
    marginTop: 46,
    marginLeft: 63,
    width: 6,
    aspectRatio: "1.2",
  },
  text: {
    textAlign: "center", // Centrar texto
  },
});

export default Filters;