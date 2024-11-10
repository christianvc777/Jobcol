import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function ProfileMenuItem({ title, iconUri }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{title}</Text>
      <Image
        style={styles.menuIcon}
        source={{ uri: iconUri }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: -15,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  menuIcon: {
    width: 5,
    aspectRatio: 0.63,
  },
});

export default ProfileMenuItem;