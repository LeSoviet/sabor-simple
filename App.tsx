import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
import { getTheme } from './theme/theme';

// Componente principal de la aplicación
export default function App() {
  // Estado para manejar el tema (claro/oscuro)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Función para alternar entre tema claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Configurar la barra de navegación de Android según el tema
  useEffect(() => {
    if (Platform.OS === 'android') {
      // NavigationBar configuration will be handled by app.json for now
      // Dynamic configuration requires expo-navigation-bar which is not web-compatible
    }
  }, [isDarkMode]);
  
  // Obtener el tema actual basado en el estado
  const currentTheme = getTheme(isDarkMode);
  
  return (
    <AppNavigator 
      theme={currentTheme}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
    />
  );
}
