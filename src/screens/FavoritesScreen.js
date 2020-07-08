import React from 'react';
import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const FavoritesScreen = props => {
    const favoritesMeals = useSelector(state => state.meals.favoriteMeals);

    return <MealList data={favoritesMeals} navigation={props.navigation}/>;
};

export default FavoritesScreen;