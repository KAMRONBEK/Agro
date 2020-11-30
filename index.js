/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import 'react-native-gesture-handler';
import App from './app/App';
import {name as appName} from './app.json';

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
