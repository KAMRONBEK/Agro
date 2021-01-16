import { connect } from 'react-redux';
import { ServicePaymentStatusModalController } from './controller';
import { IStoreState } from 'types';
import { compose } from 'utils';
import { ComponentType } from 'react';

const mapState = ({ payment: paymentState }: IStoreState) => ({
  payment: paymentState.payment,
  paymentIsFetching: paymentState.paymentIsFetching,
  paymentIsError: paymentState.paymentIsError
});

type ExportComponent = ComponentType<{}>;

export const ServicePaymentStatusModalConnect = compose<ExportComponent>(
  connect(
    mapState
  ),
)(ServicePaymentStatusModalController);
