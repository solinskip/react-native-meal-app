import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...StyleSheet.flatten(styles.mealRow), ...StyleSheet.flatten(styles.mealHeader)}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...StyleSheet.flatten(styles.mealRow), ...StyleSheet.flatten(styles.mealDetail)}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'



    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
})

export default MealItem;
