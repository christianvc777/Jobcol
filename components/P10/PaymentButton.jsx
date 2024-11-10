import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaymentButton = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('P11Screen');
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Pagar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    marginTop: 23,
    minHeight: 40,
    width: 133,
    maxWidth: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
});

export default PaymentButton;