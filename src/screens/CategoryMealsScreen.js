import React from 'react';
import {CATEGORIES} from "../data/dumyData";
import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return <MealList data={displayedMeals} navigation={props.navigation}/>;

};
// Dynamic set header title
CategoryMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    }
};

export default CategoryMealScreen;