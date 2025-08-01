// Configuración específica para web
// Este archivo ayuda a optimizar la experiencia web y evitar warnings

module.exports = {
  // Configuración para React Native Web
  resolver: {
    alias: {
      // Alias para mejorar la compatibilidad web
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx'],
  },
  
  // Configuración de Metro para web
  transformer: {
    // Optimizaciones para web
    minifierConfig: {
      // Configuración del minificador
      keep_fnames: true,
      mangle: {
        keep_fnames: true,
      },
    },
  },
  
  // Configuración de animaciones para web
  animations: {
    // Usar animaciones basadas en JS para mejor compatibilidad
    useNativeDriver: false,
    // Configuración de rendimiento
    enableLayoutAnimations: false,
  },
};