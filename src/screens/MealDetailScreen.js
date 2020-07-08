import React, {useCallback, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorites} from "../store/actions/meals";

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.route.params.mealId;
    const meal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoritesHandler = useCallback(() => {
        dispatch(toggleFavorites(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Favorite'
                    iconName='star'
                    onPress={toggleFavoritesHandler}
                />
            </HeaderButtons>
        });
    }, [toggleFavoritesHandler]);

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <View style={{...StyleSheet.flatten(styles.mealRow), ...StyleSheet.flatten(styles.mealDetail)}}>
                <Text>{meal.duration}m</Text>
                <Text>{meal.complexity.toUpperCase()}</Text>
                <Text>{meal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
        </ScrollView>
    );
};

export const screenOptions = navigationData => {
    return {
        headerTitle: navigationData.route.params.mealTitle
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
});


export default MealDetailScreen;