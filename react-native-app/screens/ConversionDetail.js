import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const ConversionDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Unit Conversions for Bartending</Text>
        <Text style={styles.description}>
          Accurate measurements are crucial in bartending to create the perfect balance of flavors.
          Here are some common conversions and measurements used by bartenders around the world.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shot Sizes Around the World</Text>
          <Text style={styles.details}>- USA: 1.5 ounces (44 milliliters)</Text>
          <Text style={styles.details}>- UK: 1.0 ounce (25 milliliters)</Text>
          <Text style={styles.details}>- Japan: 2.0 ounces (60 milliliters)</Text>
          <Text style={styles.details}>- Germany: 0.7 ounces (20 milliliters)</Text>
          <Text style={styles.details}>- Australia: 1.0 ounce (30 milliliters)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bar Spoon Measurements</Text>
          <Text style={styles.details}>
            - A standard bar spoon is approximately 5 milliliters or 1 teaspoon.
            - Bar spoons are often used to measure small amounts of liquid, such as simple syrup or liqueurs.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dash of Bitters</Text>
          <Text style={styles.details}>
            - A dash of bitters is roughly 1/8 of a teaspoon, or about 0.6 milliliters.
            - Generally, 2 to 3 dashes are enough to add complexity to most cocktails.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ounces to Milliliters</Text>
          <Text style={styles.details}>- 1 ounce = 30 milliliters</Text>
          <Text style={styles.details}>- 0.5 ounces = 15 milliliters</Text>
          <Text style={styles.details}>- 2 ounces = 60 milliliters</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Volume Conversions</Text>
          <Text style={styles.details}>- 1 tablespoon = 15 milliliters</Text>
          <Text style={styles.details}>- 1 cup = 240 milliliters</Text>
          <Text style={styles.details}>- 1 pint = 473 milliliters</Text>
          <Text style={styles.details}>- 1 liter = 33.8 ounces</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jigger Measurements</Text>
          <Text style={styles.details}>
            - A standard jigger has two sides: 1 ounce (30 milliliters) and 1.5 ounces (45 milliliters).
            - Some jiggers come with different sizes, such as 0.5 ounces (15 milliliters) on one side.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Splash Measurement</Text>
          <Text style={styles.details}>
            - A splash is approximately 1/4 ounce, or 7.5 milliliters.
            - It is commonly used when adding soda water or other mixers to a cocktail.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Bartenders</Text>
          <Text style={styles.details}>
            - Always use a jigger or measuring tool to ensure precision, especially with strong ingredients.
            - When in doubt, it's better to under-pour than over-pour to maintain balance in the drink.
          </Text>
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

export default ConversionDetail;
