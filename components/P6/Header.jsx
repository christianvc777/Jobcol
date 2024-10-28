// Header.jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.view2}>
      <View style={styles.view3}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/53557f9c6f87d70fad7b904a783661c578dfe304085691ccc6088e13b992aa21?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image1}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1519d74fffc8794371538df26eb77031e0e3559798bf544af640b99d0d5b999b?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view2: {
    display: "flex",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 49,
    flexDirection: "column",
    alignItems: "center",
  },
  view3: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "stretch",
    gap: 1,
    justifyContent: "center",
  },
  image1: {
    position: "relative",
    display: "flex",
    width: 135,
    flexShrink: 0,
    maxWidth: "100%",
    aspectRatio: 2.04, // Cambiado a número
  },
  image2: {
    position: "relative",
    display: "flex",
    marginTop: -40,
    marginBottom: "auto",
    width: 26,
    flexShrink: 0,
    aspectRatio: 0.96, // Cambiado a número
  },
});

export default Header;