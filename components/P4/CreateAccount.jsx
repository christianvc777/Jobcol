import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from './components/StatusBar';
import { FormInput } from './components/FormInput';
import { Button } from './components/Button';

export const CreateAccount = () => {
  const formInputs = [
    { label: "Nombre Completo", placeholder: "Enter your full name" },
    { label: "Nombre Usuario", placeholder: "Enter username" },
    { label: "Correo Electronico", placeholder: "Enter email" },
    { label: "Contraseña", placeholder: "Enter password", isPassword: true },
    { label: "Confirmar Contraseña", placeholder: "Confirm password", isPassword: true },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.content}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5718b49e73bf5acc83483a6617558b059273632c280d1ad260bf7e1716b8c154?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          />
          
          <Text style={styles.title}>Crear cuenta</Text>
          
          <View style={styles.form}>
            {formInputs.map((input, index) => (
              <FormInput key={index} {...input} />
            ))}
            
            <View style={styles.idSection}>
              <FormInput label="Tipo ID" placeholder="Select ID type" />
              <View style={styles.divider} />
              <FormInput label="Numero de ID" placeholder="Enter ID number" />
            </View>
          </View>

          <Text style={styles.loginLink}>
            ¿Ya tienes cuenta? Iniciar seción
          </Text>

          <View style={styles.buttonContainer}>
            <Button title="Crear cuenta" />
            <Button title="Cuenta de Empleador" variant="secondary" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 16,
  },
  content: {
    paddingHorizontal: 56,
    alignItems: "center",
  },
  logo: {
    width: 195,
    aspectRatio: 1.04,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: "Inter, sans-serif",
    marginBottom: 32,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  idSection: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  divider: {
    width: 1,
    height: 51,
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginHorizontal: 8,
  },
  loginLink: {
    color: "#43B4C0",
    marginTop: 30,
    marginBottom: 46,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 26,
  },
});