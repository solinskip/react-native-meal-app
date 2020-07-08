import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from "./MealItem";

const MealList = (props) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    return props.navigation.navigate('MealDetail', {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title
                    })
                }}/>
        );
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.data} renderItem={renderMealItem} style={{width: '100%'}}/>
            {/*<Button title='Go to Meals!' onPress={() => {*/}
            {/*    // Go to next screen and add to stack*/}
            {/*    props.navigation.navigate('MealDetail')*/}
            {/*    // Push method can be used to go the same screen but with reloaded content and added route to stack. Eg. DropBox(go to next folders and back)*/}
            {/*    // props.navigation.push('CategoryMeals');*/}
            {/*}}/>*/}
            {/*<Button title='Go back' onPress={() => {*/}
            {/*    props.navigation.pop();*/}
            {/*}}/>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
});

export default MealList;
