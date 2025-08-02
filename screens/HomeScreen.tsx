import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Switch,
  TextInput,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { recipes, Recipe } from '../data/recipes';
import { AnimatedRecipeCard } from '../components/AnimatedRecipeCard';
import { AnimatedScreenTransition } from '../components/AnimatedScreenTransition';
import { StorageService } from '../utils/storage';
import { Theme } from '../theme/theme';

// Tipos para la navegación
type RootStackParamList = {
  Home: undefined;
  Recipe: { recipe: Recipe };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Props del componente HomeScreen
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

type FilterType = 'all' | 'favorites';

// Pantalla principal que muestra la lista de recetas
export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
  theme,
  isDarkMode,
  toggleTheme,
}) => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Filtrar recetas según el filtro actual y búsqueda
  const filteredRecipes = recipes
    .filter(recipe => {
      // Filtro por favoritos
      if (currentFilter === 'favorites' && !favoriteIds.includes(recipe.id)) {
        return false;
      }
      // Filtro por búsqueda
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return recipe.title.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.ingredients.some(ingredient => 
                 ingredient.toLowerCase().includes(query)
               );
      }
      return true;
    });

  useEffect(() => {
    loadFavorites();
  }, []);

  // Recargar favoritos cuando la pantalla recibe el foco
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    try {
      const favorites = await StorageService.getFavorites();
      setFavoriteIds(favorites);
    } catch (error) {
      console.error('Error cargando favoritos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filter: FilterType) => {
    setCurrentFilter(filter);
  };

  const handleFavoriteChange = async (recipeId: string, isFavorite: boolean) => {
    // Recargar favoritos inmediatamente cuando cambian
    await loadFavorites();
  };
  // Función para navegar al detalle de una receta
  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('Recipe', { recipe });
  };



  // Componente del header con título y switch de tema
  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: theme.surface }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text }]}>🍽️ Sabor Simple</Text>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            ✨ Recetas deliciosas y fáciles ✨
          </Text>
        </View>
      </View>
      
      {/* Switch para cambiar tema */}
      <View style={styles.themeToggle}>
        <Text style={[styles.themeLabel, { color: theme.textSecondary }]}>
          {isDarkMode ? '🌙' : '☀️'} {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: theme.border, true: theme.primary }}
          thumbColor={isDarkMode ? theme.secondary : '#f4f3f4'}
        />
      </View>
    </View>
  );

  return (
    <AnimatedScreenTransition animationType="fade" duration={600}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
        translucent={false}
      />
      
      {renderHeader()}
      
      {/* Buscador */}
      <View style={[styles.searchContainer, { backgroundColor: theme.surface }]}>
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
          placeholder="Buscar recetas, ingredientes..."
          placeholderTextColor={theme.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>
      
      {/* Filtros */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            {
              backgroundColor: currentFilter === 'all' ? theme.primary : 'transparent',
              borderColor: theme.primary,
            }
          ]}
          onPress={() => handleFilterChange('all')}
        >
          <Text style={[
            styles.filterText,
            {
              color: currentFilter === 'all' ? theme.background : theme.primary,
            }
          ]}>
            📋 Todas ({recipes.length})
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            {
              backgroundColor: currentFilter === 'favorites' ? theme.primary : 'transparent',
              borderColor: theme.primary,
            }
          ]}
          onPress={() => handleFilterChange('favorites')}
        >
          <Text style={[
            styles.filterText,
            {
              color: currentFilter === 'favorites' ? theme.background : theme.primary,
            }
          ]}>
            ❤️ Favoritos ({favoriteIds.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de recetas */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
            Cargando recetas...
          </Text>
        </View>
      ) : filteredRecipes.length > 0 ? (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
             <AnimatedRecipeCard
               recipe={item}
               onPress={() => handleRecipePress(item)}
               theme={theme}
               index={index}
               onFavoriteChange={handleFavoriteChange}
             />
           )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          style={styles.scrollContainer}
          removeClippedSubviews={Platform.OS === 'android'}
          maxToRenderPerBatch={10}
          windowSize={10}
          initialNumToRender={8}
          getItemLayout={(data, index) => ({
            length: 120,
            offset: 120 * index,
            index,
          })}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyTitle, { color: theme.text }]}>
            {currentFilter === 'favorites' ? '💔 Sin favoritos' : '📭 Sin recetas'}
          </Text>
          <Text style={[styles.emptyDescription, { color: theme.textSecondary }]}>
            {currentFilter === 'favorites' 
              ? 'Agrega algunas recetas a tus favoritos para verlas aquí'
              : 'No hay recetas disponibles'
            }
          </Text>
          {currentFilter === 'favorites' && (
            <TouchableOpacity
              style={[styles.showAllButton, { backgroundColor: theme.primary }]}
              onPress={() => handleFilterChange('all')}
            >
              <Text style={[styles.showAllText, { color: theme.background }]}>
                Ver todas las recetas
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
    </AnimatedScreenTransition>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  searchInput: {
    borderWidth: 0,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 0,
    marginBottom: 4,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 165, 0, 0.15)',
    shadowColor: '#FFA500',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '600',
    color: '#FF8C00',
  },
  themeToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterText: {
    fontSize: 15,
    fontWeight: '700',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    fontStyle: 'italic',
  },
  showAllButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  showAllText: {
    fontSize: 16,
    fontWeight: '600',
  },
});