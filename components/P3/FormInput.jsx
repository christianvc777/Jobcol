import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const FormInput = ({ onConfirmPress }) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nombre" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Correo Electrónico" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onConfirmPress}>
          <Text style={styles.buttonText}>Confirmar</Text>
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
    fontFamily: 'sans-serif', // Usa una fuente del sistema
    fontWeight: '400',
    textAlign: 'center',
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    width: '100%',
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
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
    fontFamily: 'sans-serif', // Usa una fuente del sistema
  },
});

export default FormInput;