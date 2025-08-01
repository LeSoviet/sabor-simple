import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  runOnJS,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Recipe } from '../data/recipes';
import { Theme } from '../theme/theme';
import { FavoriteButton } from './FavoriteButton';

interface AnimatedRecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  theme: Theme;
  index?: number;
  onFavoriteChange?: (recipeId: string, isFavorite: boolean) => void;
}

const { width: screenWidth } = Dimensions.get('window');

export const AnimatedRecipeCard: React.FC<AnimatedRecipeCardProps> = ({
  recipe,
  onPress,
  theme,
  index = 0,
  onFavoriteChange,
}) => {
  // Valores animados
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);
  const rotateY = useSharedValue(10);
  const pressScale = useSharedValue(1);

  // Animación de entrada
  useEffect(() => {
    const delay = index * 150; // Animación escalonada
    
    setTimeout(() => {
      translateY.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
      });
      
      opacity.value = withTiming(1, {
        duration: 600,
      });
      
      scale.value = withSpring(1, {
        damping: 12,
        stiffness: 120,
      });
      
      rotateY.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
      });
    }, delay);
  }, [index]);

  // Estilo animado para la tarjeta
  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value * pressScale.value },
        { 
          perspective: 1000,
        },
        {
          rotateY: `${rotateY.value}deg`,
        },
      ],
      opacity: opacity.value,
    };
  });

  // Animación de presión
  const handlePressIn = () => {
    pressScale.value = withSpring(0.95, {
      damping: 15,
      stiffness: 300,
    });
  };

  const handlePressOut = () => {
    pressScale.value = withSpring(1, {
      damping: 15,
      stiffness: 300,
    });
  };

  // Animación de pulso para favoritos
  const pulseAnimation = () => {
    scale.value = withSequence(
      withTiming(1.1, { duration: 150 }),
      withTiming(1, { duration: 150 })
    );
  };

  const handleFavoritePress = (isFavorite: boolean) => {
    pulseAnimation();
    onFavoriteChange?.(recipe.id, isFavorite);
  };

  return (
    <Animated.View style={[styles.container, animatedCardStyle]}>
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            shadowColor: theme.text,
          },
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
      >
        {/* Emoji del plato */}
        <View style={styles.imageContainer}>
          <Text style={styles.emoji}>{recipe.image}</Text>
        </View>

        {/* Contenido de la tarjeta */}
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
                {recipe.title}
              </Text>
              <Text style={[styles.description, { color: theme.textSecondary }]} numberOfLines={2}>
                {recipe.description}
              </Text>
            </View>
            
            <View style={styles.favoriteContainer}>
              <FavoriteButton
                recipeId={recipe.id}
                onToggle={handleFavoritePress}
                theme={theme}
              />
            </View>
          </View>

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
  container: {
    marginVertical: 8,
    marginHorizontal: 0,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  emoji: {
    fontSize: 45,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
    marginRight: 12,
  },
  favoriteContainer: {
    marginTop: -4,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 6,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  prepTime: {
    fontSize: 13,
    fontWeight: '600',
  },
});