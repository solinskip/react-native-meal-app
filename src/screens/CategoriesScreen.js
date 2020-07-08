import React from 'react';
import {FlatList, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {CATEGORIES} from "../data/dumyData";
import CategoryGridTile from "../components/CategoryGridTile";
// The following two import are only for mobile devices, on web causes error
// import {HeaderButtons, Item} from "react-navigation-header-buttons";
// import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
    const renderGridItems = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', {
                        categoryId: itemData.item.id
                    })
                }}/>
        );
    };

    return (
        <View style={styles.screen}>
            {/*<Button title='Go to Meals!' onPress={() => {*/}
            {/*    props.navigation.navigate('CategoryMeals')*/}
            {/*}}/>*/}
            {/*<Button title='Go to Meals Detail' onPress={() => {*/}
            {/*    props.navigation.replace('MealDetail')*/}
            {/*}}/>*/}
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={renderGridItems}/>
        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerLeft: () => <TouchableNativeFeedback onPress={() => {
            navData.navigation.toggleDrawer();
        }}>
            <Text style={{color: 'white'}}>Menu</Text>
        </TouchableNativeFeedback>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default CategoriesScreen;