import { IDispatch } from 'store';
import { CountdownTimerController } from './controller';
import { connect } from 'react-redux';
import { IStoreState } from 'types';

const mapState = ({ signup }: IStoreState) => ({
  codeIsFetching: signup.codeIsFetching
});

const mapDispatch = ({ signup }: IDispatch) => ({
  pushSendCode: signup.pushSendCode
});

export const CountdownTimerConnect = connect(
  mapState,
  mapDispatch
)(CountdownTimerController);
