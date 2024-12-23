import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Share } from "react-native";
import { ingredients } from "../data/cocktailData";
import { useFavorites } from '../contexts/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

const CocktailDetail = ({ route }) => {
 const { cocktail } = route.params;
 const { isFavorite, toggleFavorite } = useFavorites();
 const favorite = isFavorite(cocktail.id);
 const cocktailDetail = ingredients.find((i) => i.cocktailId === cocktail.id);

 const onShare = async () => {
   try {
     await Share.share({
       message: `Check out this ${cocktail.name} recipe!\n\nIngredients:\n${cocktailDetail?.ingredients}\n\nDirections:\n${cocktailDetail?.directions?.join('\n')}`,
     });
   } catch (error) {
     console.log(error.message);
   }
 };

 return (
   <ScrollView style={styles.container}>
     <View style={styles.content}>
       <Text style={styles.title}>{cocktail.name}</Text>
       <Text style={styles.description}>{cocktail.description}</Text>
       
       {/* Method Section */}
       {cocktailDetail?.methods && (
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>Method</Text>
           <Text style={styles.methods}>
             {cocktailDetail.methods.charAt(0).toUpperCase() +
               cocktailDetail.methods.slice(1)}
           </Text>
         </View>
       )}

       {/* Ingredients Section */}
       {cocktailDetail?.ingredients && (
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>Ingredients</Text>
           <Text style={styles.ingredients}>{cocktailDetail.ingredients}</Text>
         </View>
       )}

       {/* Directions Section */}
       {cocktailDetail?.directions && (
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>Directions</Text>
           {cocktailDetail.directions.map((step, index) => (
             <Text key={index} style={styles.instructions}>
               {index + 1}. {step}
             </Text>
           ))}
         </View>
       )}

       {/* Buttons Row */}
       <View style={styles.buttonRow}>
         <TouchableOpacity 
           style={styles.iconButton}
           onPress={() => toggleFavorite(cocktail)}
         >
           <Ionicons 
             name={favorite ? 'heart' : 'heart-outline'} 
             size={28} 
             color={favorite ? '#FF6B6B' : '#000'} 
           />
         </TouchableOpacity>

         <TouchableOpacity 
           style={styles.iconButton}
           onPress={onShare}
         >
           <Ionicons 
             name="share-outline" 
             size={28} 
             color="#000" 
           />
         </TouchableOpacity>
       </View>
     </View>
   </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },
 content: {
   padding: 16,
 },
 title: {
   fontSize: 28,
   fontWeight: "bold",
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
   fontWeight: "600",
   marginBottom: 12,
 },
 methods: {
   fontSize: 16,
   lineHeight: 24,
   color: "#333",
 },
 ingredients: {
   fontSize: 16,
   lineHeight: 24,
   color: "#333",
 },
 instructions: {
   fontSize: 16,
   lineHeight: 24,
   color: "#666",
   marginBottom: 8,
 },
 buttonRow: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   gap: 20,
   marginTop: 12,
   marginBottom: 24,
 },
 iconButton: {
   padding: 12,
 },
});

export default CocktailDetail;