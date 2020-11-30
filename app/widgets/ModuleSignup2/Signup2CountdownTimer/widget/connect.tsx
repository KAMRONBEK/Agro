import { IDispatch } from 'store';
import { Signup2CountdownTimerController } from './controller';
import { connect } from 'react-redux';
import { IStoreState } from 'types';

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  codeIsFetching: signup2State.codeIsFetching
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  pushSendCode: signup2State.pushSendCode
});

export const Signup2CountdownTimerConnect = connect(
  mapState,
  mapDispatch
)(Signup2CountdownTimerController);
