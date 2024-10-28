// SearchBar.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <>
      <View style={styles.view4}>
        <Text>Que estas buscando?</Text>
      </View>
      <View style={styles.view5}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2882af100dc157adce52f69388fe0bfddc641e80ad68dddd0ef7b65996514106?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e",
          }}
          style={styles.image3}
        />
        <View style={styles.view6}>
          <Text>Auxiliar de limpieza</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    marginTop: 23,
  },
  view5: {
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    marginTop: 6,
    width: 271,
    maxWidth: "100%",
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: "stretch",
    gap: 18,
    fontFamily: "System",
    fontSize: 15,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "400",
  },
  image3: {
    position: "relative",
    display: "flex",
    marginTop: 4,
    width: 12,
    flexShrink: 0,
    aspectRatio: 1, 
  },
  view6: { 
    flexGrow: 1, 
    flexShrink: 1, 
    marginTop: -35,
    alignItems: "center",
    width: 225 
  }, 
});

export default SearchBar;