import {MEALS} from "../../data/dumyData";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}
const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);

                return {...state, favoriteMeals: updatedFavMeals};
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
            }
        case SET_FILTERS:
            console.log(action)
            const filteredMeals = state.meals.filter(meal => {
                if (action.filters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: filteredMeals}
        default:
            return state;
    }
}

export default mealsReducer;