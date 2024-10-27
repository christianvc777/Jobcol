import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const TermsAndConditions = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Al usar Jobcol, aceptas y estás de acuerdo con nuestras{'\n\n'}
        <Text style={styles.link} onPress={() => handleLinkPress('https://example.com/terms')}>
          Condiciones del servicio
        </Text>{'\n\n'}
        <Text style={styles.link} onPress={() => handleLinkPress('https://example.com/cookies')}>
          Politica de cookies
        </Text>{'\n\n'}
        <Text style={styles.link} onPress={() => handleLinkPress('https://example.com/privacy')}>
          Politicas de privacidad
        </Text>{'\n\n'}
        <Text style={styles.link} onPress={() => handleLinkPress('https://example.com/preferences')}>
          Tus preferencias de privacidad
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 51,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'System',
    lineHeight: 20,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default TermsAndConditions;