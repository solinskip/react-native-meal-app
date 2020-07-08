import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf';

class App extends Component {
    render() {
        // Create style with required css for FontAwesome icons
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(`@font-face {
             src: url(${iconFont});
             font-family: FontAwesome5_Regular;
        }`));

        // Inject stylesheet
        document.head.appendChild(style);

        return (
            <SafeAreaView style={{flex: 1}}>
                <CategoriesScreen/>
            </SafeAreaView>
        );
    }
}

export default App;