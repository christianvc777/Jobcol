import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginForm = ({ onEmployeePress, onEmployerPress }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.headerText}>Iniciar sesión</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEmployeePress}>
          <Text style={styles.buttonText}>Empleado</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>O como</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEmployerPress}>
          <Text style={styles.buttonText}>Empleador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 23,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'sans-serif', // Cambiado a una fuente del sistema
    fontWeight: '400',
    textAlign: 'center',
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 26,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'sans-serif', // Cambiado a una fuente del sistema
  },
  orText: {
    marginTop: 15,
    fontFamily: 'sans-serif', // Cambiado a una fuente del sistema
    fontSize: 16,
  },
});

export default LoginForm;