import { compose } from 'utils';
import { connect } from 'react-redux';
import { ScreenTransactionDetailsController } from './controller';
import { withErrorAuthentication } from 'templates';
import { IStoreState } from 'types';
import { ComponentType } from 'react';

const mapState = ({ app }: IStoreState) => ({
  isLogged: app.isLogged
});

type ExportComponent = ComponentType<{}>;

export const ScreenTransactionDetailsConnect = compose<ExportComponent>(
  connect(
    mapState
  ),
  withErrorAuthentication
)(ScreenTransactionDetailsController);