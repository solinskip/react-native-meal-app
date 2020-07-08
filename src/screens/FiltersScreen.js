import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, TouchableNativeFeedback, View} from 'react-native';
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const dispatch = useDispatch();

    const savedFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree
        }
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, dispatch]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Favorite'
                    iconName='save'
                    onPress={savedFilters}
                />
            </HeaderButtons>
        });
    }, [savedFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch
                    trackColor={{true: Colors.primary}}
                    thumbColor={Colors.primary}
                    value={isGlutenFree}
                    onValueChange={newValue => setIsGlutenFree(newValue)}
                />
            </View>
        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerLeft: () => <TouchableNativeFeedback onPress={() => {
            navData.navigation.toggleDrawer();
        }}><Text style={{color: 'white'}}>Menu</Text></TouchableNativeFeedback>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        paddingVertical: 15,
        fontWeight: 'bold'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
});

export default FiltersScreen;
