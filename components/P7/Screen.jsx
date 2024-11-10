// P7Screen.jsx
import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import JobListing from './JobListing';
import HomeButton from './HomeButton';

const jobListings = [
  {
    title: 'Auxiliar de Limpieza',
    description: 'Se necesita auxiliar de limpieza para trabajar en oficinas corporativas. El horario es de lunes a sábado, 7 horas al día. Se ofrece contrato a término indefinido y prestaciones de ley.',
    location: 'Carrera 11 #84-09 Zona T,               Edificio Corporativo',
    vacancies: 3,
    imageJob: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d67fc7f69b23cf7fb6aae39536a9f1660abccc58f55b2835984421f3073312d?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e',
  },
  {
    title: 'Asistente de Cocina',
    description: 'Se requiere asistente de cocina con habilidades básicas en preparación de alimentos y limpieza. Jornada laboral de 10 horas diarias, 5 días a la semana. Se ofrece alimentación durante la jornada laboral.',
    location: 'Calle 45 #18-52, Teusaquillo, Restaurante El Sabor',
    vacancies: 5,
    imageJob: 'https://cdn.builder.io/api/v1/image/assets/TEMP/862c18870d5e5ab0d9b0e84b94efab6931cb6381a6e27a4e7445968e43740bb6?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e',
  },
  {
    title: 'Cajero',
    description: 'Se busca cajero(a) con experiencia en manejo de caja registradora y atención al cliente. Debe estar disponible para trabajar en turnos de 8 horas, 6 días a la semana, con un día de descanso.',
    location: 'Av. Caracas #27-36, Chapinero, Supermercado Jumbo',
    vacancies: 8,
    imageJob: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd6ecc95ba1759911eac1e1dab351a563c46394572755da6033949fe1238d329?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7',
  },
];

function P7Screen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/53557f9c6f87d70fad7b904a783661c578dfe304085691ccc6088e13b992aa21?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' }}
        style={styles.headerImage}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Job listings header image"
      />
      {jobListings.map((job, index) => (
        <JobListing key={index} {...job} />
      ))}
      <HomeButton navigation={navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 53,
    paddingBottom: 53,
    fontFamily: 'System',
    backgroundColor: '#4a4a4a',
  },
  headerImage: {
    width: 135,
    aspectRatio: 2.04,
    marginBottom: 20,
    marginTop: -20,
  },
});

export default P7Screen;