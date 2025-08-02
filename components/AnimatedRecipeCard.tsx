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
        <View style={[styles.imageContainer, { backgroundColor: theme.surface }]}>
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
    marginVertical: 10,
    marginHorizontal: 0,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 0,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 16,
  },
  emoji: {
    fontSize: 50,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  titleContainer: {
    flex: 1,
    marginRight: 16,
  },
  favoriteContainer: {
    marginTop: -2,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
    lineHeight: 26,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  prepTime: {
    fontSize: 14,
    fontWeight: '700',
    opacity: 0.7,
  },
});