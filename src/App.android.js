import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens} from "react-native-screens";
// Improved efficiency, used under the hood the screens native code
enableScreens();

class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <MealsNavigator/>
            </SafeAreaView>
        );
    }
}

export default App;