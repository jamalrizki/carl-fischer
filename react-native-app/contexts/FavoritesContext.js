import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from AsyncStorage when the app starts
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  const saveFavorites = async (favorites) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  };

  const toggleFavorite = (cocktail) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.find((fav) => fav.id === cocktail.id)) {
        updatedFavorites = prevFavorites.filter((fav) => fav.id !== cocktail.id);
      } else {
        updatedFavorites = [...prevFavorites, cocktail];
      }
      saveFavorites(updatedFavorites); // Save to AsyncStorage
      return updatedFavorites;
    });
  };

  const isFavorite = (cocktailId) => {
    return favorites.some((fav) => fav.id === cocktailId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
