import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobSearch = () => {
  return (
    <>
      <View style={styles.view3}>
        <Text style={styles.text}>¿Que trabajo buscas?</Text>
      </View>
      <View style={styles.view4}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2882af100dc157adce52f69388fe0bfddc641e80ad68dddd0ef7b65996514106?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image3}
        />
        <View style={styles.view5}>
          <Text style={styles.text}>Auxiliar de limpieza</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view3: { 
    color: "rgba(255, 255, 255, 1)", 
    fontSize: 16, 
    marginTop: 42,
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  view4: {
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    marginTop: 14,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
    gap: 27,
    fontSize: 15,
    fontFamily: "System", // Cambiado a fuente del sistema
  },
  image3: {
    position: "relative",
    display: "flex",
    marginTop: 4,
    marginLeft: -200,
    width: 12,
    flexShrink: 0,
    aspectRatio: "1",
  },
  view5: { 
    flexBasis: "auto",
    justifyContent: "center", // Centrar contenido
    marginTop: -45,
    alignItems: "center",
    width: 225,

  },
  text: {
    textAlign: "center", // Centrar texto
  },
});

export default JobSearch;