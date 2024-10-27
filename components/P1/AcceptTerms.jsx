import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const AcceptTerms = () => {
  const [accepted, setAccepted] = useState(false);

  const toggleAccept = () => {
    setAccepted(!accepted);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.acceptContainer} onPress={toggleAccept}>
        <Image
          resizeMode="contain"
          source={{ uri: accepted ? "https://cdn.builder.io/api/v1/image/assets/TEMP/25417a98348375680b7638151d6c77edb3f109fed206d759955b9d2f04af3ff5?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7echecked" : "https://cdn.builder.io/api/v1/image/assets/TEMP/25417a98348375680b7638151d6c77edb3f109fed206d759955b9d2f04af3ff5?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.checkboxImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 47,
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxImage: {
    width: 20,
    height: 20,
  },
});

export default AcceptTerms;