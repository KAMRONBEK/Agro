import { connect } from 'react-redux';
import { ScreenSignupController } from './controller';
import { IDispatch } from 'store';

const mapDispatch = ({ signup: signupState }: IDispatch) => ({
  resetState: signupState.resetState
});

export const ScreenSignupConnect = connect(
  null,
  mapDispatch
)(ScreenSignupController);