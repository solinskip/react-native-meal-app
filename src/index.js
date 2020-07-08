import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {combineReducers, createStore} from "redux";
import mealsReducer from "./store/reducers/meals";
import React, {Component} from "react";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    meals: mealsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

class AppWithStore extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => AppWithStore);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
});