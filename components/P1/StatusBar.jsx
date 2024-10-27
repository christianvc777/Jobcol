import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const StatusBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a74e4bcca68c10201e636f111e2c4355af54d480138da09bd5ad3061032698f2?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfb4b7e746521fc815513f6ac5d87663042ef99b3f1628af6181bce3f0136ea0?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/40771837d13905e17392baeae856e4da3c33f3e3b8a8143a466fcea10f36b023?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e" }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingHorizontal: 150, 
    paddingVertical: 14,
    width: '100%',
  },
  timeContainer: {
    marginRight: 60, 
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  icon: {
    width: 28,
    aspectRatio: 2.16,
  },
});

export default StatusBar;
