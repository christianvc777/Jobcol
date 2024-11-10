import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ProfileInfo({ name, email }) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{name}</Text>
      <Text style={styles.infoText}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    color: '#F2F2F2',
    fontSize: 15,
  },
});

export default ProfileInfo;