import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ title, variant = 'primary' }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'secondary' && styles.secondaryButton]}
      accessibilityRole="button"
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#43B4C0',
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: '#848383',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.1,
  }
});