import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, StackActions, NavigationActions } from 'react-navigation';
import { styles } from './styles';
import { ROUTES } from 'const';
import { TemplateModal } from 'templates/TemplateModal';
import { Auth } from './assets';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS } from 'styles';

interface IOwnProps {
  isLogged: boolean;
  navigation: NavigationScreenProp<void>;
  pushLogout: () => void;
}

interface IState {
  isError: boolean;
}

export function withErrorAuthentication(Screen: any) {
  return class WithErrorAuthentication extends Component<IOwnProps> {
    state: IState = {
      isError: false
    };

    componentDidUpdate(prevProps: IOwnProps) {
      const { isLogged } = this.props;
      
      if (prevProps.isLogged !== isLogged) {
        if (!isLogged) {
          this.setState({ isError: true });
        }
      }
    }

    login = () => {
      const { navigation, pushLogout } = this.props;

      pushLogout();

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: ROUTES.SCREEN_SIGNUP })],
      });

      navigation.dispatch(resetAction);
    };

    render() {
      const { isError } = this.state;

      return isError ? (
        <TemplateModal
          swipeDirection={null}
          visible={true}
          style={styles.modal}
          close={() => null}
        >
          <View style={styles.main}>
            <View style={styles.warning}>
              <View style={styles.topDiv}>
                <Text style={styles.topText}>Ваша сессия нахождения в приложении устарела, пожалуйста авторизуйтесь</Text>
              </View>

              <View style={styles.imgBox}>
                <Auth />
              </View>

              <View style={styles.botDiv}>
                <TouchableOpacity style={styles.button} onPress={this.login}>
                  <LinearGradient style={styles.buttonInner} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={GRADIENT_COLORS}>
                    <Text style={styles.buttonText}>Авторизоваться</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TemplateModal>
      ) : (
        <Screen {...this.props} />
      );
    }
  };
}
