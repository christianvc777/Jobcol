// JobItem.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button'; // Importar el componente Button

const JobItem = () => {
  return (
    <>
      <View style={styles.view8}>
        <Text style={styles.text}>Trabajos cercanos</Text>
      </View>
      <View style={styles.view9}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://i.ibb.co/3Fs0ShH/Captura-de-pantalla-2024-10-27-202306.png",
          }}
          style={styles.imageCenter}
        />
      </View>
      <View style={styles.view10}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cc6e39e9e935e2456a874cd983d580f7b3557032578960f0832654979b4362?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7",
          }}
          style={styles.image4}
        />
        <View style={styles.view11}>
          <Text style={styles.text}>Restaurante Sabor</Text>
        </View>
      </View>
      <View style={styles.view12}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e62474fc09f64806868b1d55cd47c9c5bcf06d5971c5963bed9b593974ceca7a?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image5}
        />
        <View style={styles.view13}>
          <Text style={styles.text}>
            Pago: Salario Minimo {"\n"}
            Barrio: Villa de los Alpes {"\n"}
            Lugar: Restaurante {"\n"}
            Contacto: 318 435 6789 {"\n"}
            Direccion: Cra 80 - 34 Sur
          </Text>
        </View>
      </View>
      <View style={styles.view14}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f68797d432594320793c9a6c1d0b58cc6cf104fff14b0592a6e8c011830f88f?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image6}
        />
        <View>
          <Text style={styles.text}>Doña Luz</Text>
        </View>
      </View>
      <View style={styles.view15}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e62474fc09f64806868b1d55cd47c9c5bcf06d5971c5963bed9b593974ceca7a?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image7}
        />
        <View>
          <Text style={styles.text}>
            Pago: Salario Minimo {"\n"}
            Barrio: La Victoria {"\n"}
            Lugar: Panaderia {"\n"}
            Contacto: 324 567 8901 {"\n"}
            Direccion: Cra 10 -23 Norte
          </Text>
        </View>
      </View>
      <View style={styles.view16}>
        <Button label="Categoria" onPress={() => console.log('Categoria pressed')} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "System",
    fontWeight: "400",
    marginTop: 20,
    marginLeft: -70,
    alignItems: "flex-start", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  view9: {
    display: "flex",
    marginTop: 1,
    marginLeft: 11,
    width: 258,
    flexShrink: 0,
    maxWidth: "100%",
    height: 157,
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  view10: {
    display: "flex",
    marginTop: 1, // Reducir margen superior
    marginLeft: 1,
    alignItems: "baseline", // Centrar contenido
    justifyContent: "center", // Centrar contenido
    gap: 1,
    fontFamily: "System",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image4: {
    position: "absolute",
    display: "flex",
    width: 13,
    flexShrink: 0,
    aspectRatio: 0.72,
    marginLeft: -100,
  },
  imageCenter: {
    width: 200, // Ajusta el tamaño según sea necesario
    height: 200, // Ajusta el tamaño según sea necesario
    marginBottom: 10, // Ajusta el margen inferior según sea necesario
  },
  view11: {
    flexBasis: "auto",
    alignItems: "baseline",
    marginLeft: -55,
  },
  view12: {
    display: "flex",
    width: 171,
    maxWidth: "100%",
    gap: 1,
    fontFamily: "System",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    alignItems: "baseline", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  image5: {
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    aspectRatio: 1.5, // Cambiado a número
    marginLeft: 150,
  },
  view13: { marginTop: 11 },
  view14: {
    display: "flex",
    marginTop: 20,
    marginLeft: -110,
    alignItems: "flex-start", // Centrar contenido
    justifyContent: "center", // Centrar contenido
    gap: 200,
    fontFamily: "System",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image6: {
    position: "absolute",
    display: "flex",
    width: 17,
    flexShrink: 0,
    aspectRatio: 1, // Cambiado a número
    marginLeft: -50,
  },
  view15: {
    display: "flex",
    marginTop: 1,
    width: 175,
    maxWidth: "100%",
    alignItems: "baseline", // Centrar contenido
    justifyContent: "center", // Centrar contenido
    gap: 10,
    fontFamily: "System",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image7: {
    position: "relative",
    display: "flex",
    marginTop: 1,
    width: 18,
    flexShrink: 0,
    aspectRatio: 1.5, // Cambiado a número
    marginLeft: 150,

  },
  view16: {
    borderRadius: 10,
    marginTop: 40,
    width: 159,
    maxWidth: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 5,
    paddingBottom: 14,
    fontFamily: "System",
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
  text: {
    textAlign: "left", // Centrar texto
  },
});

export default JobItem;