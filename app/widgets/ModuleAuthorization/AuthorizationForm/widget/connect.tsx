import { connect } from "react-redux";
import { AuthorizationFormController } from "./controller";
import { IStoreState, FieldType } from "types";
import { IDispatch } from "store";
import { login } from "store/login";

const mapState = ({ login: loginState }: IStoreState) => ({
  phone: loginState.fields.find(field => field.type === FieldType.Phone),
  password: loginState.fields.find(field => field.type === FieldType.Password),
  hidePassword: loginState.hidePassword
});

const mapDispatch = ({ login: loginState }: IDispatch) => ({
  setField: loginState.setField,
  toggleHidePassword: loginState.toggleHidePassword
});

export const AuthorizationFormConnect = connect(
  mapState,
  mapDispatch
)(AuthorizationFormController);