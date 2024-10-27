import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.view2}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5dfd03cdd329566f03bff959cf07b6cbe789ebc0c1ced305e043cc12513bac?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7",
        }}
        style={styles.image1}
      />
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c0fee4337ec6361d01b9dd8a73841ce682ecf18b4b78e293c6ec47de9114fda?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
        }}
        style={styles.image2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view2: {
    display: "flex",
    width: "100%",
    paddingLeft: 40,
    paddingRight: 39,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Centrar contenido
    fontFamily: "System", // Cambiado a fuente del sistema
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "400",
  },
  image1: {
    position: "relative",
    display: "flex",
    width: 26,
    aspectRatio: "0.96",
  },
  image2: {
    position: "relative",
    display: "flex",
    marginTop: 51,
    width: 267,
    maxWidth: "100%",
    aspectRatio: "2.05",
  },
});

export default Header;