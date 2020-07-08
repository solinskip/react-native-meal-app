import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {MainNavigator} from "./navigation/MealsNavigator";
import {enableScreens} from "react-native-screens";
import {NavigationContainer} from "@react-navigation/native";
// Improved efficiency, used under the hood the screens native code
enableScreens();

class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <MainNavigator/>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

export default App;