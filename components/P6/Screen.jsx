import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import JobItem from './JobItem';
import Footer from './Footer';

const P6Screen = () => {
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
    paddingTop: 63,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
});

export default P6Screen;