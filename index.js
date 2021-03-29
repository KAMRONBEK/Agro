/**
 * @format
 */
import React from "react";
import {AppRegistry, Text} from 'react-native';
import 'react-native-gesture-handler';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {store} from "./app/store";
import * as Sentry from "@sentry/react-native";


if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

const MainApp = () => {

    if (!__DEV__) {
        Sentry.init({
            dsn: "https://e8080b86cf124e7fae61279d45bc5489@o511892.ingest.sentry.io/5609845",
        });
    }

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => MainApp);
