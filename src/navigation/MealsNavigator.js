import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import React from "react";
import {Platform, Text} from "react-native";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import FiltersScreen from "../screens/FiltersScreen";

const defaultSettingsNavigator = {
    // initialRouteName: 'Categories', // Default is first element in object 'Categories'
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
}, defaultSettingsNavigator);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, defaultSettingsNavigator);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Icons name='utensils' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.primary
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites', // Default is key of tab
            tabBarIcon: tabInfo => <Icons name='star' size={25} color={tabInfo.tintColor}/>,
            tabBarColor: Colors.accent
        },

    }
};

const MealsFavTabNavigator = Platform.select({
    android: createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accent,
        shifting: true, // Default false
        // Use barStyle if you want to chang background color of tabs and shifting option in set to false
        // barStyle: {
        //     backgroundColor: Colors.primary
        // }
    }),
    ios: createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accent,
        }
    })
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, defaultSettingsNavigator);

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accent
    }
});

export default createAppContainer(MainNavigator);