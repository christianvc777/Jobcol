import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf3d42ce48811bf6a88fb1e95a136055b047fe31f06dc9c4a2358df664e724cc?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' }}
          resizeMode="contain"
        />
        <Text style={styles.profileText}>Mi perfil</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.editIcon}
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/435d748b9c8c81c5ee625e3421d6e7e85065f76063883697239404b677bd7d93?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 45,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 84,
    aspectRatio: 0.97,
    borderRadius: 50,
  },
  profileText: {
    marginLeft: 10,
    fontSize: 32,
    color: '#F2F2F2',
    fontFamily: 'System',
  },
  editIcon: {
    width: 75,
    aspectRatio: 1.19,
  },
});

export default ProfileHeader;