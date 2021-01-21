import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { MainLoginSuccessModalController } from './controller';
import { Dispatch } from 'store';

const mapState = ({ signup2: signup2State, login }: IStoreState) => ({
  signupSuccessModalVisible: signup2State.signupSuccessModalVisible,
  login: login.login
});

const mapDispatch = ({ signup2: signup2State }: Dispatch) => ({
  setSignupSuccessModalState: signup2State.setSignupSuccessModalState
});

export const MainLoginSuccessModalConnect = connect(
  mapState,
  mapDispatch
)(MainLoginSuccessModalController);
