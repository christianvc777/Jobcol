// HomeButton.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomeButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('P8Screen');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Postulate</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 24,
    paddingVertical: 10,
    minHeight: 40,
    width: 133,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
});

export default HomeButton;