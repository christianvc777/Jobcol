import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PricingOption = ({ type, originalPrice, discountedPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountedPrice}>{discountedPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Cambiar a 'column' para centrar verticalmente
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
    marginBottom: 15,
    marginTop: 5,
  },
  type: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '500',
    textAlign: 'center', // Centrar texto
    marginBottom: 5,
  },
  priceContainer: {
    alignItems: 'center', // Centrar contenido horizontalmente
    alignSelf: 'center',
    marginBottom: 5,
  },
  originalPrice: {
    color: '#000',
    textAlign: 'center', // Centrar texto
    fontFamily: 'System',
    lineHeight: 16,
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    color: '#000',
    textAlign: 'center', // Centrar texto
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PricingOption;