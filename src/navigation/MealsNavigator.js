import CategoriesScreen, {screenOptions as CategoryScreenOptions} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {screenOptions as CategoryMealsScreenOptions} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {screenOptions as MealDetailScreenOptions} from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import React from "react";
import {Platform} from "react-native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import FiltersScreen, {screenOptions as FiltersScreenOptions} from "../screens/FiltersScreen";
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const defaultSettingsNavigator = {
    // initialRouteName: 'Categories', // Default is first element in object 'Categories'
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: 'white'
}

const MealsStackNavigator = createStackNavigator();
export const MealsNavigator = () => {
    return (<MealsStackNavigator.Navigator screenOptions={defaultSettingsNavigator}>
        <MealsStackNavigator.Screen
            name='Categories'
            component={CategoriesScreen}
            options={CategoryScreenOptions}
        />
        <MealsStackNavigator.Screen
            name='CategoryMeals'
            component={CategoryMealsScreen}
            options={CategoryMealsScreenOptions}
        />
        <MealsStackNavigator.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={MealDetailScreenOptions}
        />
    </MealsStackNavigator.Navigator>);
};

const FavoritesStackNavigator = createStackNavigator();
export const FavoritesNavigator = () => {
    return <FavoritesStackNavigator.Navigator screenOptions={defaultSettingsNavigator}>
        <FavoritesStackNavigator.Screen
            name='Favorites'
            component={FavoritesScreen}
        />
        <FavoritesStackNavigator.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={MealDetailScreenOptions}
        />
    </FavoritesStackNavigator.Navigator>
};

const MealsFavTabNavigator = createMaterialBottomTabNavigator();
export const MealsFavNavigator = () => Platform.select({
    android: <MealsFavTabNavigator.Navigator
        activeTintColor={Colors.accent}
        shifting={true}
    >
        <MealsFavTabNavigator.Screen
            name='Meals'
            component={MealsNavigator}
            options={{
                tabBarIcon: (tabInfo) => <Icons name='utensils' size={25} color={tabInfo.tintColor}/>,
                tabBarColor: Colors.primary
            }}
        />
        <MealsFavTabNavigator.Screen
            name='Favorites'
            component={FavoritesNavigator}
            options={{
                tabBarLabel: 'Favorites', // Default is key of tab
                tabBarIcon: tabInfo => <Icons name='star' size={25} color={tabInfo.tintColor}/>,
                tabBarColor: Colors.accent
            }}
        />
    </MealsFavTabNavigator.Navigator>
});

const FiltersStackNavigator = createStackNavigator();
export const FiltersNavigator = () => {
    return <FiltersStackNavigator.Navigator screenOptions={defaultSettingsNavigator}>
        <FiltersStackNavigator.Screen
            name='Filters'
            component={FiltersScreen}
            options={FiltersScreenOptions}
        />
    </FiltersStackNavigator.Navigator>
};

const MainDrawerNavigator = createDrawerNavigator();
export const MainNavigator = () => {
    return <MainDrawerNavigator.Navigator>
        <MainDrawerNavigator.Screen
            name='MealsFav'
            component={MealsFavNavigator}
            options={{
                title: 'Meals'
            }}
        />
        <MainDrawerNavigator.Screen name='Filters' component={FiltersNavigator}/>
    </MainDrawerNavigator.Navigator>
};