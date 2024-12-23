import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const LiqueurDetail = ({ route }) => {
  const { liqueur } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{liqueur.name}</Text>
        <Text style={styles.description}>{liqueur.explanation}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>History</Text>
          <Text style={styles.details}>{liqueur.history}</Text>
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

export default LiqueurDetail;
