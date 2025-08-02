# Sabor Simple 🍝

Una aplicación moderna de recetas sudamericanas desarrollada con React Native, Expo y TypeScript. Descubre 30 auténticas recetas de almuerzo y cena de Sudamérica con una interfaz elegante y animaciones fluidas.

## ✨ Características Principales

- **🥘 30 Recetas Sudamericanas**: Auténticas recetas de almuerzo y cena que requieren cocción
- **🎨 Interfaz Moderna**: Diseño elegante con animaciones fluidas usando React Native Reanimated
- **❤️ Sistema de Favoritos**: Guarda y filtra tus recetas favoritas con persistencia local
- **⏱️ Temporizadores Integrados**: Timers automáticos para pasos de cocción con alertas sonoras
- **🌙 Modo Oscuro por Defecto**: Inicia en tema oscuro con opción de cambio dinámico
- **🔍 Búsqueda Inteligente**: Busca recetas por nombre, ingredientes o descripción
- **📱 Multiplataforma**: Compatible con web, iOS y Android con scroll optimizado
- **🚀 Animaciones Fluidas**: Transiciones de pantalla y micro-interacciones con Reanimated
- **🎯 UI Optimizada**: Header compacto para mayor protagonismo de las recetas
- **🖼️ Iconos Visuales**: Cada receta tiene su emoji representativo visible

## 🛠️ Stack Tecnológico

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma de desarrollo y deployment
- **TypeScript** - Tipado estático para mayor robustez
- **React Navigation** - Navegación nativa entre pantallas
- **React Native Reanimated** - Animaciones de alto rendimiento
- **React Native Web** - Soporte optimizado para web
- **AsyncStorage** - Persistencia local de datos
- **Expo AV** - Reproducción de sonidos para alertas

## 📁 Estructura del Proyecto

```
sabor-simple/
├── components/
│   ├── AnimatedRecipeCard.tsx      # Tarjeta de receta con animaciones
│   ├── AnimatedScreenTransition.tsx # Transiciones entre pantallas
│   ├── FavoriteButton.tsx          # Botón de favoritos animado
│   └── Timer.tsx                   # Temporizador con alertas
├── data/
│   └── recipes.ts                  # 30 recetas sudamericanas
├── navigation/
│   └── AppNavigator.tsx            # Stack de navegación
├── screens/
│   ├── HomeScreen.tsx              # Lista con búsqueda y filtros
│   └── RecipeScreen.tsx            # Detalle con timers integrados
├── theme/
│   └── theme.ts                    # Temas claro/oscuro
├── utils/
│   ├── storage.ts                  # Servicio de persistencia
│   └── timeParser.ts               # Parser de tiempos en recetas
├── web/
│   ├── index.css                   # Estilos optimizados para web
│   └── index.html                  # Template HTML
└── App.tsx                         # Componente raíz
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI (opcional)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd sabor-simple
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**

   **Para Web:**
   ```bash
   npm run web
   ```
   La aplicación estará disponible en `http://localhost:8081`

   **Para Android:**
   ```bash
   npm run android
   ```

   **Para iOS:**
   ```bash
   npm run ios
   ```

## 📱 Funcionalidades

### Pantalla Principal (HomeScreen)
- Lista de 30 recetas sudamericanas con tarjetas visuales animadas
- Información básica: título, descripción, tiempo de preparación y dificultad
- Sistema de filtros: "Todas" y "Favoritos" con contador dinámico
- Búsqueda inteligente por nombre, ingredientes o descripción
- Interruptor para cambiar entre tema claro y oscuro
- Header compacto optimizado para mayor visibilidad de recetas
- Iconos emoji visibles para cada receta

### Pantalla de Detalle (RecipeScreen)
- Información completa de la receta seleccionada
- Lista detallada de ingredientes con cantidades precisas
- Pasos de preparación numerados con tiempos específicos
- Temporizadores integrados con alertas sonoras
- Botón de favoritos animado con persistencia local
- Navegación fluida con transiciones animadas

### Temas
- **Modo Oscuro (Por Defecto)**: Colores oscuros para mejor experiencia visual
- **Modo Claro**: Colores claros y suaves como alternativa
- Cambio dinámico sin reiniciar la aplicación
- Colores optimizados para ambos modos sin elementos blancos problemáticos

## 🍳 Recetas Sudamericanas Incluidas

### Almuerzos (15 recetas)
1. **Asado Argentino** - Parrillada tradicional con chimichurri
2. **Bandeja Paisa** - Plato típico colombiano completo
3. **Feijoada Brasileña** - Guiso de frijoles negros con carnes
4. **Locro Peruano** - Guiso cremoso de zapallo y quinoa
5. **Cazuela Chilena** - Sopa sustanciosa con pollo y verduras
6. **Sancocho Venezolano** - Sopa tradicional con carnes y tubérculos
7. **Churrasco Uruguayo** - Carne a la parrilla con ensaladas
8. **Pabellón Criollo** - Plato nacional venezolano
9. **Carbonada Argentina** - Guiso de carne con frutas
10. **Mondongo Colombiano** - Sopa de callos tradicional
11. **Pachamanca Peruana** - Cocción ancestral en tierra
12. **Chivito Uruguayo** - Sandwich gourmet completo
13. **Ajiaco Bogotano** - Sopa de papas con pollo
14. **Picanha Brasileña** - Corte de carne premium
15. **Empanadas Salteñas** - Empanadas jugosas bolivianas

### Cenas (15 recetas)
16. **Milanesas Argentinas** - Escalopes empanados crujientes
17. **Arepa Reina Pepiada** - Arepa rellena venezolana
18. **Moqueca Bahiana** - Guiso de pescado brasileño
19. **Anticuchos Peruanos** - Brochetas de corazón marinadas
20. **Pastel de Choclo** - Pastel chileno de maíz
21. **Tamal Colombiano** - Tamal envuelto en hoja
22. **Chupe de Camarones** - Sopa cremosa peruana
23. **Matambre Relleno** - Carne enrollada argentina
24. **Hallacas Venezolanas** - Tamal navideño tradicional
25. **Bobó de Camarão** - Crema brasileña de yuca
26. **Causa Limeña** - Terrina peruana de papa
27. **Choripán Argentino** - Sandwich de chorizo clásico
28. **Patacones Colombianos** - Plátano verde frito
29. **Coxinha Brasileña** - Croqueta de pollo tradicional
30. **Sopaipillas Chilenas** - Masa frita con pebre

## 🎨 Diseño y UX

- **Interfaz Minimalista**: Diseño limpio y fácil de usar
- **Header Compacto**: Más espacio para las recetas principales
- **Colores Optimizados**: Paleta moderna sin elementos blancos problemáticos
- **Tipografía Escalada**: Tamaños reducidos para mejor aprovechamiento del espacio
- **Iconos Emoji Visibles**: Representación visual clara de cada receta
- **Animaciones Fluidas**: Micro-interacciones y transiciones suaves
- **Modo Oscuro Prioritario**: Experiencia visual mejorada por defecto
- **Scroll Optimizado**: Navegación fluida en todas las plataformas

## 🔧 Personalización

### Agregar Nuevas Recetas
Edita el archivo `data/recipes.ts` y agrega nuevos objetos al array `recipes`:

```typescript
{
  id: '6',
  title: 'Nueva Receta',
  description: 'Descripción de la receta',
  image: '🍕', // Emoji representativo
  prepTime: '15 min',
  difficulty: 'Fácil',
  ingredients: ['Ingrediente 1', 'Ingrediente 2'],
  steps: ['Paso 1', 'Paso 2']
}
```

### Modificar Temas
Edita el archivo `theme/theme.ts` para personalizar los colores:

```typescript
export const lightTheme: Theme = {
  background: '#FFFFFF',
  primary: '#FF6B6B',
  // ... otros colores
};
```

## 📝 Notas de Desarrollo

- **Código Limpio**: Comentarios descriptivos y estructura clara
- **TypeScript**: Tipado estático para mejor mantenibilidad
- **Componentes Reutilizables**: Arquitectura modular optimizada
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **Optimizaciones de Performance**: Scroll suave y animaciones eficientes
- **Gestión de Estado**: Persistencia local con AsyncStorage
- **Temas Dinámicos**: Sistema robusto de colores adaptativos
- **UI/UX Mejorada**: Espaciado optimizado y elementos visuales claros

## 🔄 Últimas Actualizaciones

### v2.0.0 - Optimización UI y Contenido
- ✅ Agregadas 30 recetas sudamericanas auténticas
- ✅ Implementado sistema de favoritos con persistencia
- ✅ Integrados temporizadores con alertas sonoras
- ✅ Configurado modo oscuro como predeterminado
- ✅ Optimizado header para mayor protagonismo de recetas
- ✅ Corregidos problemas de scroll en web
- ✅ Eliminados elementos blancos problemáticos en temas
- ✅ Restaurados iconos emoji en tarjetas de recetas
- ✅ Mejorada tipografía y espaciado general

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como proyecto de demostración de React Native con Expo y TypeScript.

---

¡Disfruta cocinando con Sabor Simple! 👨‍🍳👩‍🍳