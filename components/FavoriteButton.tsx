import React, { useState, useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { StorageService } from '../utils/storage';
import { Theme } from '../theme/theme';

interface FavoriteButtonProps {
  /** ID de la receta */
  recipeId: string;
  /** Tema actual */
  theme: Theme;
  /** Tamaño del botón */
  size?: 'small' | 'medium' | 'large';
  /** Callback cuando cambia el estado */
  onToggle?: (isFavorite: boolean) => void;
  /** Mostrar texto junto al icono */
  showText?: boolean;
}

/**
 * Componente FavoriteButton - Botón para marcar/desmarcar favoritos
 */
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  recipeId,
  theme,
  size = 'medium',
  onToggle,
  showText = false
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Cargar estado inicial
  useEffect(() => {
    loadFavoriteStatus();
  }, [recipeId]);

  /**
   * Carga el estado de favorito desde AsyncStorage
   */
  const loadFavoriteStatus = async () => {
    try {
      setIsLoading(true);
      const favorite = await StorageService.isFavorite(recipeId);
      setIsFavorite(favorite);
    } catch (error) {
      console.error('Error cargando estado de favorito:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Alterna el estado de favorito
   */
  const toggleFavorite = async () => {
    if (isLoading) return;

    try {
      // Animación de press
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      const newFavoriteStatus = await StorageService.toggleFavorite(recipeId);
      setIsFavorite(newFavoriteStatus);
      onToggle?.(newFavoriteStatus);

      // Animación de éxito
      if (newFavoriteStatus) {
        // Animación de "me gusta" - pulso y rotación
        Animated.parallel([
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.3,
              duration: 200,
              easing: Easing.out(Easing.quad),
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 200,
              easing: Easing.out(Easing.quad),
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 400,
            easing: Easing.out(Easing.back(1.5)),
            useNativeDriver: true,
          }),
        ]).start(() => {
          rotateAnim.setValue(0);
        });
      }
    } catch (error) {
      console.error('Error al alternar favorito:', error);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: styles.smallContainer,
          text: styles.smallText,
          icon: styles.smallIcon,
        };
      case 'large':
        return {
          container: styles.largeContainer,
          text: styles.largeText,
          icon: styles.largeIcon,
        };
      default:
        return {
          container: styles.mediumContainer,
          text: styles.mediumText,
          icon: styles.mediumIcon,
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const heartIcon = isFavorite ? '❤️' : '🤍';
  const heartColor = isFavorite ? '#FF6B6B' : theme.textSecondary;

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (isLoading) {
    return (
      <TouchableOpacity 
        style={[
          styles.container,
          sizeStyles.container,
          { backgroundColor: theme.surface }
        ]}
        disabled
      >
        <Text style={[sizeStyles.icon, { color: theme.textSecondary }]}>⏳</Text>
        {showText && (
          <Text style={[sizeStyles.text, { color: theme.textSecondary }]}>
            Cargando...
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        sizeStyles.container,
        {
          backgroundColor: isFavorite ? theme.primary + '20' : theme.surface,
          borderColor: isFavorite ? theme.primary : theme.border,
          borderWidth: isFavorite ? 2 : 1,
        }
      ]}
      onPress={toggleFavorite}
      activeOpacity={0.7}
    >
      <Animated.View
        style={{
          transform: [
            { scale: Animated.multiply(scaleAnim, pulseAnim) },
            { rotate: rotateInterpolate },
          ],
        }}
      >
        <Text style={[sizeStyles.icon, { color: heartColor }]}>
          {heartIcon}
        </Text>
      </Animated.View>
      
      {showText && (
        <Text style={[sizeStyles.text, { color: theme.text }]}>
          {isFavorite ? 'Favorito' : 'Agregar'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  
  // Tamaños pequeños
  smallContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 32,
    minHeight: 32,
  },
  smallIcon: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  
  // Tamaños medianos
  mediumContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 40,
    minHeight: 40,
  },
  mediumIcon: {
    fontSize: 20,
  },
  mediumText: {
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '500',
  },
  
  // Tamaños grandes
  largeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 48,
    minHeight: 48,
  },
  largeIcon: {
    fontSize: 24,
  },
  largeText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});