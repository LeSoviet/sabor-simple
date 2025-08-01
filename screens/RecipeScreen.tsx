import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import { AnimatedScreenTransition } from '../components/AnimatedScreenTransition';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Recipe } from '../data/recipes';
import { Theme } from '../theme/theme';
import { FavoriteButton } from '../components/FavoriteButton';
import { Timer } from '../components/Timer';
import { TimeParser, DetectedTime } from '../utils/timeParser';

// Tipos para la navegación
type RootStackParamList = {
  Home: undefined;
  Recipe: { recipe: Recipe };
};

type RecipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Recipe'>;
type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

// Props del componente RecipeScreen
interface RecipeScreenProps {
  navigation: RecipeScreenNavigationProp;
  route: RecipeScreenRouteProp;
  theme: Theme;
  isDarkMode: boolean;
}

// Pantalla de detalle que muestra la información completa de una receta
export const RecipeScreen: React.FC<RecipeScreenProps> = ({
  navigation,
  route,
  theme,
  isDarkMode,
}) => {
  const { recipe } = route.params;
  const [stepTimers, setStepTimers] = useState<{ [stepIndex: number]: DetectedTime[] }>({});
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Detectar tiempos en los pasos
    const timers: { [stepIndex: number]: DetectedTime[] } = {};
    recipe.steps.forEach((step, index) => {
      const detectedTimes = TimeParser.detectTimes(step);
      if (detectedTimes.length > 0) {
        timers[index] = detectedTimes;
      }
    });
    setStepTimers(timers);

    // Animación de entrada
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [recipe]);

  // Función para volver a la pantalla anterior
  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderStepWithTimers = (step: string, stepIndex: number) => {
    const timers = stepTimers[stepIndex] || [];
    
    if (timers.length === 0) {
      return (
        <Text style={[styles.stepText, { color: theme.text }]}>
          {step}
        </Text>
      );
    }

    // Dividir el texto en partes y agregar timers
    let lastIndex = 0;
    const parts: React.ReactNode[] = [];
    
    timers.forEach((timer, timerIndex) => {
      // Agregar texto antes del timer
      if (timer.startIndex > lastIndex) {
        parts.push(
          <Text key={`text-${timerIndex}`} style={[styles.stepText, { color: theme.text }]}>
            {step.substring(lastIndex, timer.startIndex)}
          </Text>
        );
      }
      
      // Agregar el texto del timer como enlace
      parts.push(
        <Text 
          key={`timer-text-${timerIndex}`} 
          style={[styles.stepText, styles.timerText, { color: theme.primary }]}
        >
          {timer.originalText}
        </Text>
      );
      
      lastIndex = timer.endIndex;
    });
    
    // Agregar texto restante
    if (lastIndex < step.length) {
      parts.push(
        <Text key="text-end" style={[styles.stepText, { color: theme.text }]}>
          {step.substring(lastIndex)}
        </Text>
      );
    }
    
    return (
      <View>
        <View style={styles.stepTextContainer}>
          {parts}
        </View>
        {timers.map((timer, timerIndex) => (
          <Timer
            key={`timer-${stepIndex}-${timerIndex}`}
            timeText={timer.originalText}
          />
        ))}
      </View>
    );
  };

  return (
    <AnimatedScreenTransition animationType="slideUp" duration={500}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={theme.background}
          translucent={false}
        />
      
      {/* Header con botón de regreso y favorito */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: theme.primary }]}>← Atrás</Text>
        </TouchableOpacity>
        
        <FavoriteButton
          recipeId={recipe.id}
          theme={theme}
          size="medium"
          showText
        />
      </View>

      <Animated.ScrollView 
        style={[styles.content, { opacity: fadeAnim }]} 
        showsVerticalScrollIndicator={false}
      >
        {/* Información principal de la receta */}
        <View style={[styles.recipeHeader, { backgroundColor: theme.surface }]}>
          <Text style={styles.emoji}>{recipe.image}</Text>
          <Text style={[styles.title, { color: theme.text }]}>{recipe.title}</Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {recipe.description}
          </Text>
          
          {/* Información adicional */}
          <View style={styles.infoRow}>
            <View style={[styles.infoBadge, { backgroundColor: theme.primary }]}>
              <Text style={styles.infoBadgeText}>⏱️ {recipe.prepTime}</Text>
            </View>
            <View style={[styles.infoBadge, { backgroundColor: theme.secondary }]}>
              <Text style={styles.infoBadgeText}>📊 {recipe.difficulty}</Text>
            </View>
          </View>
        </View>

        {/* Sección de ingredientes */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>🛒 Ingredientes</Text>
          <View style={[styles.sectionContent, { backgroundColor: theme.card, borderColor: theme.border }]}>
            {recipe.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={[styles.bullet, { color: theme.primary }]}>•</Text>
                <Text style={[styles.ingredientText, { color: theme.text }]}>
                  {ingredient}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sección de pasos */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>👩‍🍳 Preparación</Text>
          <View style={[styles.sectionContent, { backgroundColor: theme.card, borderColor: theme.border }]}>
            {recipe.steps.map((step, index) => (
              <View key={index} style={styles.stepItem}>
                <View style={[styles.stepNumber, { backgroundColor: theme.primary }]}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.stepContent}>
                  {renderStepWithTimers(step, index)}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Espaciado inferior */}
        <View style={styles.bottomSpacing} />
      </Animated.ScrollView>
    </SafeAreaView>
    </AnimatedScreenTransition>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  recipeHeader: {
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  infoBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionContent: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    marginTop: 2,
  },
  ingredientText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
  },
  timerText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  bottomSpacing: {
    height: 40,
  },
});