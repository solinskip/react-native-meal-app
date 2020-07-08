import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
import {combineReducers, createStore} from "redux";
import mealsReducer from "./src/store/reducers/meals";
import {Provider} from "react-redux";
import React, {Component} from "react";
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
