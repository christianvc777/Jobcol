// P6Screen.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import JobItem from './JobItem';
import Footer from './Footer';

const P7Screen = () => {
  return (
    <View style={styles.view1}>
      <Header />
      <SearchBar />
      <JobItem />
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
    paddingTop: 20,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center", 
    justifyContent: "center", 
  },
});

export default P7Screen;