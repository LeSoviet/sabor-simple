import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { Recipe } from '../data/recipes';
import { Theme } from '../theme/theme';
import { FavoriteButton } from './FavoriteButton';

// Props del componente RecipeCard
interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  theme: Theme;
  /** Índice para animación escalonada */
  index?: number;
  /** Callback cuando cambia el estado de favorito */
  onFavoriteChange?: (recipeId: string, isFavorite: boolean) => void;
}

// Componente reutilizable para mostrar una tarjeta de receta
export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress, theme, index = 0, onFavoriteChange }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Animación de entrada escalonada
    const delay = index * 100;
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay,
        easing: Easing.out(Easing.back(1.2)),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        delay,
        easing: Easing.out(Easing.back(1.1)),
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  const handlePress = () => {
    // Animación de press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    onPress();
  };
  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          { translateY: slideAnim },
          { scale: scaleAnim },
        ],
      }}
    >
      <TouchableOpacity
        style={[styles.card, { 
          backgroundColor: theme.card,
          borderColor: theme.border,
          shadowColor: theme.shadow
        }]} 
        onPress={handlePress}
        activeOpacity={0.7}
      >
      {/* Emoji de la receta */}
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>{recipe.image}</Text>
      </View>
      
      {/* Información de la receta */}
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
              {recipe.title}
            </Text>
          </View>
          <View style={styles.favoriteContainer}>
            <FavoriteButton
              recipeId={recipe.id}
              theme={theme}
              size="small"
              onToggle={(isFavorite) => onFavoriteChange?.(recipe.id, isFavorite)}
            />
          </View>
        </View>
        
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {recipe.description}
        </Text>
        
        {/* Información adicional */}
        <View style={styles.infoRow}>
          <View style={[styles.badge, { backgroundColor: theme.primary }]}>
            <Text style={styles.badgeText}>{recipe.difficulty}</Text>
          </View>
          
          <Text style={[styles.prepTime, { color: theme.textSecondary }]}>
            ⏱️ {recipe.prepTime}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  emoji: {
    fontSize: 40,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  favoriteContainer: {
    marginTop: -4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  prepTime: {
    fontSize: 12,
    fontWeight: '500',
  },
});