import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const FAVORITES_KEY = 'sabor_simple_favorites';

// Detectar si estamos en web
const isWeb = Platform.OS === 'web';

// Implementación de storage compatible con React Native y Web
const storage = {
  getItem: async (key: string): Promise<string | null> => {
    if (isWeb && typeof window !== 'undefined' && window.localStorage) {
      // Web - usar localStorage
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        console.error('Error accessing localStorage:', error);
        return null;
      }
    } else {
      // React Native - usar AsyncStorage
      try {
        return await AsyncStorage.getItem(key);
      } catch (error) {
        console.error('Error accessing AsyncStorage:', error);
        return null;
      }
    }
  },
  setItem: async (key: string, value: string): Promise<void> => {
    if (isWeb && typeof window !== 'undefined' && window.localStorage) {
      // Web - usar localStorage
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    } else {
      // React Native - usar AsyncStorage
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.error('Error writing to AsyncStorage:', error);
      }
    }
  }
};

/**
 * Utilidad para manejar el almacenamiento local de favoritos
 * Compatible con web y React Native
 */
export class StorageService {
  /**
   * Obtiene la lista de IDs de recetas favoritas
   */
  static async getFavorites(): Promise<string[]> {
    try {
      const favorites = await storage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
      return [];
    }
  }

  /**
   * Agrega una receta a favoritos
   */
  static async addToFavorites(recipeId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      if (!favorites.includes(recipeId)) {
        const updatedFavorites = [...favorites, recipeId];
        await storage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      }
    } catch (error) {
      console.error('Error al agregar a favoritos:', error);
    }
  }

  /**
   * Remueve una receta de favoritos
   */
  static async removeFromFavorites(recipeId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      const updatedFavorites = favorites.filter(id => id !== recipeId);
      await storage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error al remover de favoritos:', error);
    }
  }

  /**
   * Verifica si una receta está en favoritos
   */
  static async isFavorite(recipeId: string): Promise<boolean> {
    try {
      const favorites = await this.getFavorites();
      return favorites.includes(recipeId);
    } catch (error) {
      console.error('Error al verificar favorito:', error);
      return false;
    }
  }

  /**
   * Alterna el estado de favorito de una receta
   */
  static async toggleFavorite(recipeId: string): Promise<boolean> {
    try {
      const isFav = await this.isFavorite(recipeId);
      if (isFav) {
        await this.removeFromFavorites(recipeId);
        return false;
      } else {
        await this.addToFavorites(recipeId);
        return true;
      }
    } catch (error) {
      console.error('Error al alternar favorito:', error);
      return false;
    }
  }
}