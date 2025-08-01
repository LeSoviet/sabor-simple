import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
  withRepeat,
  interpolateColor,
} from 'react-native-reanimated';
import { Theme } from '../theme/theme';

interface AnimationDemoProps {
  theme: Theme;
}

export const AnimationDemo: React.FC<AnimationDemoProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Valores animados para diferentes demostraciones
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const colorProgress = useSharedValue(0);
  const heartScale = useSharedValue(1);

  // Animación de escala con spring
  const scaleAnimation = () => {
    scale.value = withSequence(
      withSpring(1.2, { damping: 10, stiffness: 100 }),
      withSpring(1, { damping: 10, stiffness: 100 })
    );
  };

  // Animación de rotación
  const rotateAnimation = () => {
    rotation.value = withSequence(
      withTiming(360, { duration: 1000 }),
      withTiming(0, { duration: 0 })
    );
  };

  // Animación de deslizamiento
  const slideAnimation = () => {
    translateX.value = withSequence(
      withSpring(100, { damping: 15, stiffness: 150 }),
      withSpring(-100, { damping: 15, stiffness: 150 }),
      withSpring(0, { damping: 15, stiffness: 150 })
    );
  };

  // Animación de fade
  const fadeAnimation = () => {
    opacity.value = withSequence(
      withTiming(0.2, { duration: 500 }),
      withTiming(1, { duration: 500 })
    );
  };

  // Animación de color
  const colorAnimation = () => {
    colorProgress.value = withSequence(
      withTiming(1, { duration: 1000 }),
      withTiming(0, { duration: 1000 })
    );
  };

  // Animación de corazón (como favoritos)
  const heartAnimation = () => {
    heartScale.value = withSequence(
      withSpring(1.5, { damping: 10, stiffness: 200 }),
      withSpring(1, { damping: 10, stiffness: 200 })
    );
  };

  // Estilos animados
  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedRotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const animatedSlideStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedFadeStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animatedColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      [theme.primary, '#FF6B6B']
    );
    return { backgroundColor };
  });

  const animatedHeartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: heartScale.value }],
  }));

  if (!isVisible) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.surface }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          🎨 Demo de Animaciones Reanimated
        </Text>
        <TouchableOpacity
          style={[styles.closeButton, { backgroundColor: theme.primary }]}
          onPress={() => setIsVisible(false)}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Animación de Escala */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Escala con Spring</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, { backgroundColor: theme.primary }, animatedScaleStyle]}>
              <Text style={styles.demoText}>📦</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={scaleAnimation}
            >
              <Text style={styles.buttonText}>Animar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Animación de Rotación */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Rotación</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, { backgroundColor: '#FF6B6B' }, animatedRotateStyle]}>
              <Text style={styles.demoText}>🔄</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#FF6B6B' }]}
              onPress={rotateAnimation}
            >
              <Text style={styles.buttonText}>Girar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Animación de Deslizamiento */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Deslizamiento</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, { backgroundColor: '#4ECDC4' }, animatedSlideStyle]}>
              <Text style={styles.demoText}>➡️</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#4ECDC4' }]}
              onPress={slideAnimation}
            >
              <Text style={styles.buttonText}>Deslizar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Animación de Fade */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Fade In/Out</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, { backgroundColor: '#FFE66D' }, animatedFadeStyle]}>
              <Text style={styles.demoText}>👻</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#FFE66D' }]}
              onPress={fadeAnimation}
            >
              <Text style={[styles.buttonText, { color: theme.text }]}>Fade</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Animación de Color */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Cambio de Color</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, animatedColorStyle]}>
              <Text style={styles.demoText}>🎨</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={colorAnimation}
            >
              <Text style={styles.buttonText}>Color</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Animación de Corazón (Favoritos) */}
        <View style={styles.demoSection}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Corazón Favorito</Text>
          <View style={styles.demoRow}>
            <Animated.View style={[styles.demoBox, { backgroundColor: theme.surface }, animatedHeartStyle]}>
              <Text style={[styles.demoText, { fontSize: 32 }]}>❤️</Text>
            </Animated.View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#FF6B6B' }]}
              onPress={heartAnimation}
            >
              <Text style={styles.buttonText}>💖</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    maxHeight: 400,
  },
  demoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  demoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  demoText: {
    fontSize: 24,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});