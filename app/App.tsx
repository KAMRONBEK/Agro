/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { store } from 'store';
import { AppLoggedInWithNavigator, AppAuthWithNavigator } from 'router';
import { isTokenExist } from 'utils';
import { MyStatusBar } from 'widgets/ModuleShared';

interface IState {
  tokenExist: Boolean;
}

export default class App extends Component<{}, IState> {
  state: IState = {
    tokenExist: null
  }

  async componentDidMount() {
    const hasToken = await isTokenExist();

    this.setState({ tokenExist: hasToken });
  }

  renderNavigator = () => {
    const { tokenExist } = this.state;
    
    switch(tokenExist) {
      case true: {
        return <AppLoggedInWithNavigator />;
      }
      case false: {
        return <AppAuthWithNavigator />;
      }
    }
  }

  render() {
    return (
      <Provider store={store}>
        <MyStatusBar />

        <SafeAreaView style={styles.safearea}>
          {this.renderNavigator()}

        </SafeAreaView>
        
        <FlashMessage position="top" />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  }
})
