import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FormInput from './FormInput'; 
import Button from './Button'; 

const P3LoginScreen = ({ navigation }) => {
  const handleConfirmPress = () => {
    navigation.navigate('P5Screen');
  };

  return (
    <View style={styles.container}>
      <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a99437d73bf9e8c9a2c8c90a165b3e78ad214a5639a8919eb7fccdbb9dc6ab8d?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.logo}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cf0b2b4a52ea6653e8f6b543ed91e223c633c6cac0289f9c87f3bddabc79fa0?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.title}
        />
      <FormInput onConfirmPress={handleConfirmPress} />
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>
          ¿No tienes cuenta? Crear cuenta
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 22,
  },
  title: {
    width: 210,
    aspectRatio: 2.31,
    marginTop: 3,
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountText: {
    color: '#007BFF',
  },
});

export default P3LoginScreen;