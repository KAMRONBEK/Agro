import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { LoginTypeButtonsController } from './controller';
import { withNavigation } from 'react-navigation';
import { compose } from 'utils';

const mapState = ({}: IStoreState) => ({

});

const mapDispatch = ({}: IDispatch) => ({

});

type ExportComponent = ComponentType<{}>;

export const LoginTypeButtonsConnect = compose<ExportComponent>(
  withNavigation,
  connect(
    mapState,
    mapDispatch
  )
)(LoginTypeButtonsController);
