// Footer.jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.view17}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b9e57b332f3484b20d7517db75f1ee69cc0d939a1469ef9ece5a822e6bdf6a2?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
        }}
        style={styles.image8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view17: {
    display: "flex",
    marginTop: 1,
    width: "100%",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 15,
    paddingBottom: 48,
    flexDirection: "column",
    alignItems: "center",
  },
  image8: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: "relative",
    display: "flex",
    width: 42,
    aspectRatio: 0.95, // Cambiado a número
  },
});

export default Footer;