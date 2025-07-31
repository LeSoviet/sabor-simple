import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Switch,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { recipes, Recipe } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
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
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  // Recargar favoritos cuando la pantalla recibe el foco
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  useEffect(() => {
    filterRecipes();
  }, [currentFilter, favoriteIds]);

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

  const filterRecipes = () => {
    if (currentFilter === 'favorites') {
      const favRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));
      setFilteredRecipes(favRecipes);
    } else {
      setFilteredRecipes(recipes);
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

  // Renderizar cada item de la lista
  const renderRecipeItem = ({ item, index }: { item: Recipe; index: number }) => (
    <RecipeCard
      recipe={item}
      onPress={() => handleRecipePress(item)}
      theme={theme}
      index={index}
      onFavoriteChange={handleFavoriteChange}
    />
  );

  // Componente del header con título y switch de tema
  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: theme.surface }]}>
      <Text style={[styles.title, { color: theme.text }]}>Sabor Simple</Text>
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        Recetas deliciosas y fáciles
      </Text>
      
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
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      
      {renderHeader()}
      
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
            ❤️ Favoritas ({favoriteIds.length})
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
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyTitle, { color: theme.text }]}>
            {currentFilter === 'favorites' ? '💔 Sin favoritas' : '📭 Sin recetas'}
          </Text>
          <Text style={[styles.emptyDescription, { color: theme.textSecondary }]}>
            {currentFilter === 'favorites' 
              ? 'Agrega algunas recetas a favoritos para verlas aquí'
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
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
    paddingVertical: 10,
    gap: 10,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
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
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
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