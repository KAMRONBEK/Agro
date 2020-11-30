import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { styles } from './styles';
import { ROUTES } from 'const';
import { TemplateModal } from 'templates/TemplateModal';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS, Palette } from 'styles';
import { Processing, Failed, Success } from '../assets';
import { IPayment } from 'types';
import { ServicePaymentStatusModalView } from './view';

interface IConnectProps {
  payment: IPayment;
  paymentIsFetching: boolean;
  paymentIsError: boolean;
  navigation: NavigationScreenProp<void>;
}

interface IState {
  showStatusModal: boolean;
}

export class ServicePaymentStatusModalController extends Component<IConnectProps> {
  state: IState = {
    showStatusModal: false
  };

  componentDidUpdate(prevProps: IConnectProps) {
    const { paymentIsFetching, paymentIsError, payment } = this.props;
    
    if (prevProps.paymentIsFetching !== paymentIsFetching) {
      !!paymentIsFetching ? this.setState({ showStatusModal: true }) : this.setState({ showStatusModal: false });
    }

    if (prevProps.paymentIsError !== paymentIsError) {
      !!paymentIsError && this.setState({ showStatusModal: true });
    }

    if (prevProps.payment !== payment) {
      !!payment && this.setState({ showStatusModal: true });
    }
  }

  done = () => {
    const { navigation } = this.props;

    this.setState({ showStatusModal: false });

    navigation.goBack();
  }

  doneError = () => {
    this.setState({ showStatusModal: false });
  }

  render() {
    const { payment, paymentIsFetching, paymentIsError } = this.props;
    const { showStatusModal } = this.state;

    return !!showStatusModal && (
      <ServicePaymentStatusModalView 
        payment={payment}
        paymentIsFetching={paymentIsFetching}
        paymentIsError={paymentIsError}
        done={this.done}
        doneError={this.doneError}
      />
    )
  }
};
