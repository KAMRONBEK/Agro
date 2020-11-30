import { connect } from "react-redux";
import { SignupButtonController } from "./controller";
import { IDispatch } from "store";
import { IStoreState } from "types";
import { withNavigation } from "react-navigation";
import { ComponentType } from "react";
import { compose } from "utils";

const mapState = ({ signup: signupState }: IStoreState) => ({
  code: signupState.code,
  codeIsFetching: signupState.codeIsFetching,
  signup: signupState.signup,
  signupIsFetching: signupState.signupIsFetching
});

const mapDispatch = ({ signup: signupState }: IDispatch) => ({
  pushSendCode: signupState.pushSendCode
});

type ExportComponent = ComponentType<{}>;

export const SignupButtonConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(SignupButtonController);