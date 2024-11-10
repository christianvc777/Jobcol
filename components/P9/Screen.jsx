import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileMenuItem from './ProfileMenuItem';
import PremiumButton from './PremiumButton';

const menuItems = [
  { title: 'Chats', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/287c2d19881cb9ead20da58fa1fa20b17804e4e3cf213986c9f94e93ed8e4f4e?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Crear nueva propuesta', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/991feedc8f7751402700e6807dededfcf2a90611d91e7dec325603fe1b7be566?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Deja tu reseña', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ca35623b76144a89a33213f204abce22397093e385f04e0d381c8e0f4ba3c31?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Actividad', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/287c2d19881cb9ead20da58fa1fa20b17804e4e3cf213986c9f94e93ed8e4f4e?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Mira lo que tenemos para ti', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16d0162bf03598556bb11ac5ac97e28abcbf01cf2cb002fdf2a3de6e7a2e3fb7?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Avisos', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d32b73929848f02dc480e2e8b9f069633fd01e04ff0330e0ee176c332232b807?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
  { title: 'Postulaciones', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d32b73929848f02dc480e2e8b9f069633fd01e04ff0330e0ee176c332232b807?placeholderIfAbsent=true&apiKey=e1d1830b4a5549ae817c3c03080dce7e' },
];

function P9Screen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <ProfileHeader />
      <ProfileInfo
        name="Juan Martinez"
        email="JuanMa1983@gmail.com"
      />
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <ProfileMenuItem title={item.title} iconUri={item.icon} />
          <View style={styles.divider} />
        </React.Fragment>
      ))}
      <PremiumButton navigation={navigation}/>
      <View style={styles.upgradeContainer}>
        <Text style={styles.upgradeText}>Mejora tu plan</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexGrow: 1,
    paddingHorizontal: 55,
    paddingTop: 63,
    paddingBottom: 200,
    backgroundColor: '#005555',
    fontFamily: 'System',
    fontSize: 15,
    color: '#FFFFFF',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginVertical: 10,
  },
  upgradeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 43,
  },
  upgradeText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginRight: 11,
  },
  starsIcon: {
    width: 40,
    aspectRatio: 1.05,
  },
});

export default P9Screen;