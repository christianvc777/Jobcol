import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobItem = () => {
  return (
    <>
      <View style={styles.view7}>
        <Text>Buscar por:</Text>
      </View>
      <View style={styles.view8}>
        <Text>Ubicación actual:</Text>
      </View>
      <View style={styles.view9} />
      <View style={styles.view10}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/97cc6e39e9e935e2456a874cd983d580f7b3557032578960f0832654979b4362?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image4}
        />
        <View style={styles.view11}>
          <Text>Restaurante Sabor</Text>
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
          <Text>
            Pago: Salario Minimo <br />
            Barrio: Villa de los alpes
            <br />
            Lugar: Restaurante <br />
            Contacto: 300 000 1001
            <br />
            Direccion: Cra 80 -34 sur{" "}
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
          <Text>Doña Luz</Text>
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
          <Text>
            Pago: Salario Minimo <br />
            Barrio: La victoria <br />
            Lugar: Panaderia
            <br />
            Contacto: 300 000 1001
            <br />
            Direccion: Cra 80 -34 sur{" "}
          </Text>
        </View>
      </View>
      <View style={styles.view16}>
        <Text>Categoria</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Mitr, sans-serif",
    fontWeight: "400",
    marginTop: 30,
    marginLeft: 51,
  },
  view8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    marginTop: 15,
    marginLeft: 59,
  },
  view9: {
    display: "flex",
    marginTop: 15,
    marginLeft: 11,
    width: 258,
    flexShrink: "0",
    maxWidth: "100%",
    height: 157,
  },
  view10: {
    display: "flex",
    marginTop: 24,
    marginLeft: 62,
    alignItems: "stretch",
    gap: 13,
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image4: {
    position: "relative",
    display: "flex",
    width: 13,
    flexShrink: "0",
    aspectRatio: "0.72",
  },
  view11: { flexBasis: "auto" },
  view12: {
    display: "flex",
    width: 171,
    maxWidth: "100%",
    gap: 11,
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image5: {
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: "0",
    aspectRatio: "1.5",
  },
  view13: { marginTop: 11 },
  view14: {
    display: "flex",
    marginTop: 53,
    marginLeft: 65,
    alignItems: "stretch",
    gap: 10,
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image6: {
    position: "relative",
    display: "flex",
    width: 17,
    flexShrink: "0",
    aspectRatio: "1",
  },
  view15: {
    display: "flex",
    marginTop: 8,
    width: 175,
    maxWidth: "100%",
    alignItems: "stretch",
    gap: 15,
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
  image7: {
    position: "relative",
    display: "flex",
    marginTop: 4,
    width: 18,
    flexShrink: "0",
    aspectRatio: "1.5",
  },
  view16: {
    borderRadius: 10,
    marginTop: 43,
    width: 159,
    maxWidth: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 5,
    paddingBottom: 14,
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default JobItem;