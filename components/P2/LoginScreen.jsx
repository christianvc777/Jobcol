import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import StatusBar from './StatusBar';
import LoginForm from './LoginForm';
import Footer from './Footer';

const LoginScreen = ({ navigation }) => {
  const handleEmployeePress = () => {
    //navigation.navigate('P3LoginScreen');
  };

  const handleEmployerPress = () => {
    //navigation.navigate('P3LoginScreen');
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
        <LoginForm onEmployeePress={handleEmployeePress} onEmployerPress={handleEmployerPress} />
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>
            ¿No tienes cuenta? Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 15,
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
  createAccountButton: {
    marginTop: 110,
  },
  createAccountText: {
    color: '#43B4C0',
    fontSize: 16,
    fontFamily: 'sans-serif', // Usa una fuente del sistema
  },
});

export default LoginScreen;