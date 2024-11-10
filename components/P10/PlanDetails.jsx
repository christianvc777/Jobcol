import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.planTitle}>Plan Empresarial</Text>
      <View style={styles.separator} />
      <Text style={styles.planDescription}>
        ¡Haz que tu empresa sea la primera opción para {'\n'}
        quienes buscan talento con nuestro Plan Premium! {'\n'}
        Aumenta tu visibilidad en el mercado laboral, {'\n'} destacando frente a los mejores jefes.
      </Text>
      <View style={styles.separator} />
      <Text style={styles.additionalServicesTitle}>Obten Servicios adicionales</Text>
      <View style={styles.separator} />
      <Text style={styles.additionalServices}>
        - Mas visibilidad en tus publicaciones
        {'\n\n'}
        - Recomendacion ante trabajadores bien calificados
        {'\n\n'}
        - Sin limites de búsquedas
      </Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  planTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 5,
  },
  separator: {
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    marginTop: 10,
    width: 288,
    maxWidth: '100%',
    height: 2,
    marginBottom: -5,
  },
  planDescription: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'System',
    lineHeight: 16,
    marginTop: 15,
  },
  additionalServicesTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginTop: 37,
    marginBottom: 5,
  },
  additionalServices: {
    color: '#000',
    fontFamily: 'System',
    lineHeight: 16,
    marginTop: 20,
    width: 250,
  },
});

export default PlanDetails;