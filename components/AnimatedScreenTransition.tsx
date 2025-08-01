import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

interface AnimatedScreenTransitionProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'scale' | 'slideUp';
  duration?: number;
  delay?: number;
}

export const AnimatedScreenTransition: React.FC<AnimatedScreenTransitionProps> = ({
  children,
  animationType = 'fade',
  duration = 600,
  delay = 0,
}) => {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(50);
  const translateY = useSharedValue(50);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    const startAnimation = () => {
      switch (animationType) {
        case 'fade':
          opacity.value = withTiming(1, {
            duration,
            easing: Easing.out(Easing.cubic),
          });
          break;
          
        case 'slide':
          opacity.value = withTiming(1, { duration: duration * 0.8 });
          translateX.value = withSpring(0, {
            damping: 15,
            stiffness: 100,
          });
          break;
          
        case 'slideUp':
          opacity.value = withTiming(1, { duration: duration * 0.8 });
          translateY.value = withSpring(0, {
            damping: 15,
            stiffness: 100,
          });
          break;
          
        case 'scale':
          opacity.value = withTiming(1, { duration: duration * 0.8 });
          scale.value = withSpring(1, {
            damping: 12,
            stiffness: 120,
          });
          break;
      }
    };

    if (delay > 0) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  }, [animationType, duration, delay]);

  const animatedStyle = useAnimatedStyle(() => {
    const baseStyle = {
      opacity: opacity.value,
    };

    switch (animationType) {
      case 'slide':
        return {
          ...baseStyle,
          transform: [{ translateX: translateX.value }],
        };
        
      case 'slideUp':
        return {
          ...baseStyle,
          transform: [{ translateY: translateY.value }],
        };
        
      case 'scale':
        return {
          ...baseStyle,
          transform: [{ scale: scale.value }],
        };
        
      default:
        return baseStyle;
    }
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});