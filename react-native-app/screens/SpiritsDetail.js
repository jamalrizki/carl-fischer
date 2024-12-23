import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { spirits } from '../data/cocktailData';

const SpiritsDetail = ({ route }) => {
  const { spirit } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{spirit.name}</Text>
        <Text style={styles.description}>{spirit.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>History</Text>
          <Text style={styles.details}>{spirit.history}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explanation</Text>
          <Text style={styles.details}>{spirit.explanation}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default SpiritsDetail;