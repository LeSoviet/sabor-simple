// Definición de colores para los temas claro y oscuro
export interface Theme {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  card: string;
  shadow: string;
}

// Tema claro
export const lightTheme: Theme = {
  background: '#FFFFFF',
  surface: '#F8F9FA',
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  text: '#2C3E50',
  textSecondary: '#7F8C8D',
  border: '#E9ECEF',
  card: '#FFFFFF',
  shadow: '#000000'
};

// Tema oscuro
export const darkTheme: Theme = {
  background: '#1A1A1A',
  surface: '#2D2D2D',
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  border: '#404040',
  card: '#2D2D2D',
  shadow: '#000000'
};

// Función para obtener el tema según el modo
export const getTheme = (isDark: boolean): Theme => {
  return isDark ? darkTheme : lightTheme;
};