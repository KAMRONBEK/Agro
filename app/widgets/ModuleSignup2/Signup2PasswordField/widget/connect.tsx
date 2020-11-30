import { connect } from 'react-redux';
import { Signup2PasswordFieldController } from './controller';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  field: signup2State.fields.find(field => field.type === FieldType.Password),
  hidePassword: signup2State.hidePassword
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  setField: signup2State.setField,
  toggleHidePassword: signup2State.toggleHidePassword
});

export const Signup2PasswordFieldConnect = connect(
  mapState,
  mapDispatch
)(Signup2PasswordFieldController);