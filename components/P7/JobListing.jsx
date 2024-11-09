import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function JobListing({ title, description, location, vacancies, imageJob }) {
  return (
    <View style={styles.jobListing}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.jobDescription}>Descripción: {description}</Text>
      <Text style={styles.jobLocation}>Ubicación: {location}</Text>
      {vacancies && (
        <Text style={styles.vacancies}>Vacantes: {vacancies}</Text>
      )}
      <Image
        source={{ uri: imageJob }}
        style={styles.Image}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={`Image for ${title} job listing`}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  jobListing: {
    borderRadius: 5,
    width: '100%',
    maxWidth: 297,
    padding: 7,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  jobDescription: {
    fontSize: 12,
    marginBottom: 1,
  },
  jobLocation: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  Image: {
    width: 135,
    aspectRatio: 1,
    marginBottom: 1,
    alignSelf: 'center',
  },
  vacancies: {
    fontSize: 12,
    color: 'rgba(201, 53, 53, 1)',
  },
});

export default JobListing;