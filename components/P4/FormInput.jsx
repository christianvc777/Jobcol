import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const FormInput = ({ label, placeholder, type = "text", isPassword = false }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label} nativeID={`${label}Label`}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        accessibilityLabel={label}
        accessibilityLabelledBy={`${label}Label`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    width: '100%',
  },
  label: {
    marginBottom: 4,
    color: '#848383',
  },
  input: {
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    width: 240,
    maxWidth: "100%",
    padding: 15,
    fontFamily: "System",
    color: "#848383",
  }
});