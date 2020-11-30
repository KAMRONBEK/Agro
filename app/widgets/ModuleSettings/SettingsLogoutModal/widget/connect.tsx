import { connect } from 'react-redux';
import { SettingsLogoutModalController, IOwnProps } from './controller';
import { IDispatch } from 'store';
import { compose } from 'utils';
import { IStoreState } from 'types';
import { ComponentType } from 'react';
import { withNavigation } from 'react-navigation';

const mapState = ({ login: loginState }: IStoreState) => ({
  logout: loginState.logout,
  logoutIsFetching: loginState.logoutIsFetching
});

const mapDispatch = ({ login: loginState }: IDispatch) => ({
  pushLogout: loginState.pushLogout
});

type ExportComponent = ComponentType<IOwnProps>;

export const SettingsLogoutModalConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(SettingsLogoutModalController);