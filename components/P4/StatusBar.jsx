import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const StatusBar = () => {
  return (
    <View style={styles.statusBarContainer}>
      <View style={styles.timeContainer}>
        <Text>9:41</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/45eab34c2817dbb86e53ca2d9907112df4383af10b261ee5fc61dce3ef669666?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.cellularIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a07e93d31a35d6cebac64646cb5257529185fbf0881cd72696cf78babbcb050?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.wifiIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cd5161f21c737b21920c8b83eb4edd7f33ce7bd8965668acb98cff47b374683?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.batteryIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarContainer: {
    display: "flex",
    width: 422,
    maxWidth: "100%",
    paddingLeft: 47,
    paddingRight: 47,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
  },
  timeContainer: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontFamily: "SF Pro, sans-serif",
    lineHeight: 20,
    textAlign: "center",
  },
  iconContainer: {
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    gap: 7,
    flexDirection: 'row'
  },
  cellularIcon: {
    width: 19,
    aspectRatio: 1.58,
  },
  wifiIcon: {
    width: 17,
    aspectRatio: 1.42,
  },
  batteryIcon: {
    width: 27,
    aspectRatio: 2.08,
  }
});