# Changelog - Sabor Simple

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [1.1.0] - 2024-01-XX

### Agregado
- ⏰ **Sistema de Timer/Alarma**: Detección automática de tiempos en los pasos de las recetas con botones interactivos para iniciar temporizadores
- 🔊 **Notificación Sonora**: Alarma audible cuando los temporizadores llegan a cero
- ❤️ **Sistema de Favoritos**: Funcionalidad para marcar y filtrar recetas favoritas con persistencia local
- ✨ **Animaciones Mejoradas**: 
  - Animaciones de entrada para las tarjetas de recetas (fade, slide, scale)
  - Efectos de escala, rotación y pulso para el botón de favoritos
  - Animaciones de entrada para las pantallas de recetas
  - Efectos de presión en elementos interactivos
- 🎛️ **Filtros de Recetas**: Botones para alternar entre "Todas" y "Favoritas" en la pantalla principal
- 📝 **Detección Inteligente de Tiempo**: Parser que reconoce múltiples formatos de tiempo en español

### Mejorado
- 🎨 **Interfaz de Usuario**: 
  - Layout mejorado con mejor organización de elementos
  - Botón de favoritos integrado en las tarjetas de recetas
  - Header reorganizado en la pantalla de recetas
  - Mejor espaciado y organización de pasos con timers
- 📱 **Experiencia de Usuario**: 
  - Navegación más fluida con retroalimentación visual
  - Estados vacíos informativos para listas de favoritos
  - Feedback visual inmediato en todas las interacciones
- 🏗️ **Arquitectura**: 
  - Nuevos servicios utilitarios para gestión de almacenamiento y parsing de tiempo
  - Componentes reutilizables y modulares
  - Mejor separación de responsabilidades

### Técnico
- Agregado `@react-native-async-storage/async-storage` para persistencia de favoritos
- Agregado `expo-av` para reproducción de sonidos de alarma
- Nuevos componentes: `Timer`, `FavoriteButton`
- Nuevos servicios: `StorageService`, `TimeParser`
- Actualización de recetas con tiempos específicos para demostrar funcionalidad de timer
- Implementación de animaciones usando `Animated` API de React Native
- Gestión de estado mejorada con hooks personalizados

### Archivos Modificados
- `components/Timer.tsx` - Nuevo componente de temporizador
- `components/FavoriteButton.tsx` - Nuevo componente de favoritos
- `components/RecipeCard.tsx` - Integración de favoritos y animaciones
- `screens/HomeScreen.tsx` - Sistema de filtros y gestión de favoritos
- `screens/RecipeScreen.tsx` - Integración de timers y favoritos
- `utils/storage.ts` - Servicio de almacenamiento
- `utils/timeParser.ts` - Parser de tiempo
- `data/recipes.ts` - Recetas actualizadas con tiempos específicos

---

## [Versión 1.0.0] - 2025-01-30

### 🎉 Lanzamiento Inicial
- Aplicación base con React Native + Expo + TypeScript
- Lista de recetas con tarjetas visuales
- Pantalla de detalle con ingredientes y pasos
- Sistema de temas claro/oscuro
- Navegación con React Navigation
- 5 recetas predefinidas
- Documentación completa