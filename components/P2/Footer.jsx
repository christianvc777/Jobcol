import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0af44f3072c4cbec6f8bf9c14a6ccb86aaa8c3da251494574d4e9f3272e90ed8?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
        style={styles.footerIcon}
      />
      <View style={styles.footerSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 147,
    width: 142,
    alignSelf: 'center',
  },
  footerIcon: {
    width: 15,
    aspectRatio: 0.83,
  },
  footerSpace: {
    width: 20,
    height: 20,
  },
});

export default Footer;