// Header.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Mejora tu plan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: -60,
  },
  headerText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 32,
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default Header;