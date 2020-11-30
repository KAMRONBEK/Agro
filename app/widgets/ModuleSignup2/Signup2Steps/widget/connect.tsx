import { connect } from 'react-redux';
import { Signup2StepsController } from './controller';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  phone: signup2State.fields.find(field => field.type === FieldType.Phone),
  code: signup2State.codeField,
  confirmPhone: signup2State.confirmPhone,
  signupIsFetching: signup2State.signupIsFetching
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  pushSendCode: signup2State.pushSendCode,
  pushSignup: signup2State.pushSignup
});

export const Signup2StepsConnect = connect(
  mapState,
  mapDispatch
)(Signup2StepsController);