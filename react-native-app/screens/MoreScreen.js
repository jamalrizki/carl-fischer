import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MoreScreen = ({ navigation }) => {
  const menuItems = [
    { title: "All Cocktails", screen: "CocktailsScreen", icon: "list-outline" },
    { title: "Unit Conversions", screen: "ConversionDetail", icon: "calculator-outline" },
    { title: "Liqueur Types", screen: "LiqueursScreen", icon: "pint-outline" },
    { title: "Beer Types", screen: "BeersScreen", icon: "beer-outline" },
    { title: "Wine Types", screen: "WinesScreen", icon: "wine-outline" },
    { title: "Bar Tools", screen: "BarToolsScreen", icon: "construct-outline" },
    { title: "Glassware", screen: "GlassScreen", icon: "flask-outline" },
    { title: "Contact", screen: "ContactScreen", icon: "mail-outline" }
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Ionicons name={item.icon} size={24} color="#666" style={styles.icon} />
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: "#000",
  },
});

export default MoreScreen;
