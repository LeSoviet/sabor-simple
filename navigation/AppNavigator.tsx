import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { RecipeScreen } from '../screens/RecipeScreen';
import { Recipe } from '../data/recipes';
import { Theme } from '../theme/theme';

// Definición de los parámetros de navegación
export type RootStackParamList = {
  Home: undefined;
  Recipe: { recipe: Recipe };
};

// Crear el stack navigator
const Stack = createStackNavigator<RootStackParamList>();

// Props del componente AppNavigator
interface AppNavigatorProps {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Componente principal de navegación
export const AppNavigator: React.FC<AppNavigatorProps> = ({
  theme,
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <NavigationContainer
      theme={{
        dark: isDarkMode,
        colors: {
          primary: theme.primary,
          background: theme.background,
          card: theme.surface,
          text: theme.text,
          border: theme.border,
          notification: theme.secondary,
        },
        fonts: {
          regular: {
            fontFamily: 'System',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'System',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'System',
            fontWeight: '700',
          },
          heavy: {
            fontFamily: 'System',
            fontWeight: '900',
          },
        },
      }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Ocultamos el header por defecto para usar nuestros propios headers
        }}
      >
        {/* Pantalla principal */}
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              theme={theme}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
          )}
        </Stack.Screen>
        
        {/* Pantalla de detalle de receta */}
        <Stack.Screen name="Recipe">
          {(props) => (
            <RecipeScreen
              {...props}
              theme={theme}
              isDarkMode={isDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};