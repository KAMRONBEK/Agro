import { connect } from 'react-redux';
import { SignupPasswordFieldController } from './controller';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';

const mapState = ({ signup }: IStoreState) => ({
  field: signup.fields.find(field => field.type === FieldType.Password),
  hidePassword: signup.hidePassword
});

const mapDispatch = ({ signup }: IDispatch) => ({
  setField: signup.setField,
  toggleHidePassword: signup.toggleHidePassword
});

export const SignupPasswordFieldConnect = connect(
  mapState,
  mapDispatch
)(SignupPasswordFieldController);