# Sabor Simple 🍝

Una aplicación móvil de recetas simples desarrollada con React Native, Expo y TypeScript.

## 📱 Características

- **Lista de Recetas**: Pantalla principal con tarjetas visuales para cada receta
- **Detalle de Receta**: Vista completa con ingredientes y pasos de preparación
- **Navegación Intuitiva**: Flujo simple entre pantallas
- **Tema Claro/Oscuro**: Interruptor para cambiar entre modos
- **Datos Locales**: Recetas almacenadas localmente sin necesidad de backend
- **Diseño Responsivo**: Compatible con web, iOS y Android

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **React Native Web** - Soporte para web

## 📁 Estructura del Proyecto

```
sabor-simple/
├── components/
│   └── RecipeCard.tsx      # Componente reutilizable de tarjeta de receta
├── data/
│   └── recipes.ts          # Datos de recetas y tipos
├── navigation/
│   └── AppNavigator.tsx    # Configuración de navegación
├── screens/
│   ├── HomeScreen.tsx      # Pantalla principal con lista de recetas
│   └── RecipeScreen.tsx    # Pantalla de detalle de receta
├── theme/
│   └── theme.ts            # Configuración de temas claro/oscuro
└── App.tsx                 # Componente principal
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
- Lista de recetas con tarjetas visuales
- Información básica: título, descripción, tiempo de preparación y dificultad
- Interruptor para cambiar entre tema claro y oscuro
- Navegación al detalle al tocar una receta

### Pantalla de Detalle (RecipeScreen)
- Información completa de la receta seleccionada
- Lista detallada de ingredientes
- Pasos de preparación numerados
- Botón de regreso a la pantalla principal

### Temas
- **Modo Claro**: Colores claros y suaves
- **Modo Oscuro**: Colores oscuros para mejor experiencia nocturna
- Cambio dinámico sin reiniciar la aplicación

## 🍳 Recetas Incluidas

1. **Pasta con Tomate** - Clásica pasta con salsa casera
2. **Ensalada César** - Ensalada fresca con aderezo césar
3. **Tortilla Española** - Tradicional tortilla de patatas
4. **Smoothie de Frutas** - Batido nutritivo y refrescante
5. **Quesadillas de Queso** - Quesadillas crujientes y deliciosas

## 🎨 Diseño

- **Interfaz Minimalista**: Diseño limpio y fácil de usar
- **Colores Atractivos**: Paleta de colores moderna
- **Tipografía Clara**: Texto legible y bien estructurado
- **Iconos Emoji**: Representación visual divertida de las recetas

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
- **Componentes Reutilizables**: Arquitectura modular
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla

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