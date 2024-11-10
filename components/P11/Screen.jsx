import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const P8Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            Bienvenido a {'\n'} tu plan premium{'\n\n'}
            ¡Disfruta de todos los beneficios!{'\n'}
          </Text>
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
    marginTop: -20,
  },
  contentWrapper: {
    display: 'flex',
    width: 400,
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  statusContainer: {
    marginBottom: 10,
  },
  statusText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 32,
    fontFamily: 'System',
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default P8Screen;