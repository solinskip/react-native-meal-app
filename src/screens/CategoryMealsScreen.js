import React from 'react';
import {CATEGORIES} from "../data/dumyData";
import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const CategoryMealScreen = props => {
    const categoryId = props.route.params.categoryId;
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return <MealList data={displayedMeals} navigation={props.navigation}/>;

};
// Dynamic set header title
export const screenOptions = navigationData => {
    const categoryId = navigationData.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    }
};

export default CategoryMealScreen;