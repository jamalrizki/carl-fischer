import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { spirits } from '../data/cocktailData';

const SpiritsScreen = ({ navigation }) => {
  const sortedSpirits = spirits.sort((a, b) => a.name.localeCompare(b.name));

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('SpiritsDetail', { spirit: item })}
    >
      <View style={styles.cardContent}>
        <Text style={styles.spiritName}>{item.name}</Text>
        <Text style={styles.spiritDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedSpirits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    justifyContent: 'center',
  },
  spiritName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  spiritDescription: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 12,
  },
});

export default SpiritsScreen;