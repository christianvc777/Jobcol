import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const StatusBar = () => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a74e4bcca68c10201e636f111e2c4355af54d480138da09bd5ad3061032698f2?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.signalIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfb4b7e746521fc815513f6ac5d87663042ef99b3f1628af6181bce3f0136ea0?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.wifiIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/40771837d13905e17392baeae856e4da3c33f3e3b8a8143a466fcea10f36b023?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.batteryIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 14,
  },
  timeContainer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  signalIcon: {
    width: 19,
    aspectRatio: 1.58,
  },
  wifiIcon: {
    width: 17,
    aspectRatio: 1.42,
  },
  batteryIcon: {
    width: 28,
    aspectRatio: 2.16,
  },
});

export default StatusBar;