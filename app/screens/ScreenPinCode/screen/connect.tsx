import { ComponentType } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { ScreenPinController } from './controller';

const mapState = ({ app }: IStoreState) => ({});

type ExportComponent = ComponentType<{}>;

export let ScreenPinCode = connect(mapState)(withNavigation(ScreenPinController));
