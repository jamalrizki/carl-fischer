import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/Homescreen.js";
import CocktailDetail from "./screens/CocktailDetail";
import CocktailsList from "./screens/CocktailsList"; 
import BarToolsScreen from "./screens/BarToolsScreen.js";
import ToolDetail from "./screens/ToolDetail";
import SearchScreen from "./screens/SearchScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import SpiritsScreen from "./screens/SpiritsScreen.js";
import SpiritsDetail from "./screens/SpiritsDetail.js";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import FavoritesScreen from "./screens/FavoritesScreen";
import MoreScreen from "./screens/MoreScreen";
import GlassScreen from "./screens/GlassScreen";
import GlassDetail from "./screens/GlassDetail";
import LiqueursScreen from "./screens/LiqueursScreen"; 
import LiqueurDetail from "./screens/LiqueurDetail";
import ConversionDetail from "./screens/ConversionDetail";
import BeersScreen from "./screens/BeersScreen";
import BeerDetail from "./screens/BeerDetail";
import WinesScreen from "./screens/WinesScreen";
import WineDetail from "./screens/WineDetail";
import CocktailsScreen from "./screens/CocktailsScreen"; // Added to handle "All Cocktails" navigation

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Spirits") {
            iconName = focused ? "wine" : "wine-outline";
          } else if (route.name === "More") {
            iconName = focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#FF6B6B",
        tabBarInactiveTintColor: "#666",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Spirits" component={SpiritsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CocktailDetail"
            component={CocktailDetail}
            options={({ route }) => ({
              title: route.params.cocktail?.name,
            })}
          />
          <Stack.Screen
            name="CocktailsList"
            component={CocktailsList}
            options={({ route }) => ({
              title: `${route.params?.spirit} Cocktails`,
            })}
          />
          <Stack.Screen
            name="CocktailsScreen" 
            component={CocktailsScreen}
            options={{
              title: "All Cocktails",
            }}
          />
          <Stack.Screen
            name="ToolDetail"
            component={ToolDetail}
            options={({ route }) => ({
              title: route.params.tool?.name,
            })}
          />
          <Stack.Screen
            name="SpiritsDetail"
            component={SpiritsDetail}
            options={({ route }) => ({
              title: route.params.spirit?.name,
            })}
          />
          <Stack.Screen
            name="GlassDetail"
            component={GlassDetail}
            options={({ route }) => ({
              title: route.params.glass?.name,
            })}
          />
          <Stack.Screen
            name="LiqueursScreen" 
            component={LiqueursScreen}
            options={{
              title: "Liqueur Types",
            }}
          />
          <Stack.Screen
            name="LiqueurDetail"
            component={LiqueurDetail}
            options={({ route }) => ({
              title: route.params.liqueur?.name,
            })}
          />
          <Stack.Screen
            name="ConversionDetail" 
            component={ConversionDetail}
            options={{
              title: "Unit Conversions",
            }}
          />
          <Stack.Screen
            name="BeersScreen" 
            component={BeersScreen}
            options={{
              title: "Beer Types",
            }}
          />
          <Stack.Screen
            name="BeerDetail"
            component={BeerDetail}
            options={({ route }) => ({
              title: route.params.beer?.name,
            })}
          />
          <Stack.Screen
            name="WinesScreen" 
            component={WinesScreen}
            options={{
              title: "Wine Types",
            }}
          />
          <Stack.Screen
            name="WineDetail"
            component={WineDetail}
            options={({ route }) => ({
              title: route.params.wine?.name,
            })}
          />
          <Stack.Screen
            name="GlassScreen" 
            component={GlassScreen}
            options={{
              title: "Glassware",
            }}
          />
          <Stack.Screen
            name="BarToolsScreen" 
            component={BarToolsScreen}
            options={{
              title: "Bar Tools",
            }}
          />
          <Stack.Screen
            name="ContactScreen" 
            component={ContactScreen}
            options={{
              title: "Contact",
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
