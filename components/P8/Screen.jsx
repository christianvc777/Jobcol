import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const P8Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Ya estas Postulado</Text>
        </View>
        <Button navigation={navigation} label="Inicio" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 320,
    paddingBottom: 365,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005555',
  },
  contentWrapper: {
    display: 'flex',
    width: 184,
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  statusContainer: {
    marginBottom: 40,
  },
  statusText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 32,
    fontFamily: 'System',
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default P8Screen;