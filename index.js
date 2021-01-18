/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import 'react-native-gesture-handler';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {store} from "./app/store";
import React from "react";

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

const MainApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => MainApp);
