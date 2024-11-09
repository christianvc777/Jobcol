import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import StatusBar from './StatusBar';
import Button from './Button';
import TermsAndConditions from './TermsAndConditions';
import AcceptTerms from './AcceptTerms';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('P2LoginScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.content}>
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
      </View>
      <Button label="Ingresar" style={styles.loginButton} onPress={handleLogin} />
      <Button label="Crear una cuenta" style={styles.createAccountButton} />
      <TermsAndConditions />
      <AcceptTerms />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 11,
    maxWidth: 480,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    flex: 1,
    paddingHorizontal: 80,
    alignItems: 'center',
  },
  logo: {
    width: 209,
    aspectRatio: 1.03,
    marginTop: 20,
  },
  title: {
    width: 210,
    aspectRatio: 2.31,
    marginTop: 8,
  },
  loginButton: {
    marginTop: 29,
  },
  createAccountButton: {
    marginTop: 15,
  },
});

export default LoginScreen;