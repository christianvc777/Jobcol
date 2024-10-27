import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import JobSearch from './JobSearch';
import Filters from './Filters';
import Footer from './Footer';

const P5Screen = () => {
  return (
    <View style={styles.view1}>
      <Header />
      <JobSearch />
      <Filters />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingTop: 61,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center", // Centrar contenido
    justifyContent: "center", // Centrar contenido
  },
});

export default P5Screen;