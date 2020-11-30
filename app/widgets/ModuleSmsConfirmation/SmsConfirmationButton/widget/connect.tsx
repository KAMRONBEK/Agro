import { connect } from "react-redux";
import { SmsConfirmationButtonController } from "./controller";
import { IDispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { withNavigation } from "react-navigation";
import { ComponentType } from "react";

const mapState = ({ signup: signupState }: IStoreState) => ({
  confirmIsFetching: signupState.confirmIsFetching,
  signup: signupState.signup,
  signupIsFetching: signupState.signupIsFetching
});

const mapDispatch = ({ signup }: IDispatch) => ({
  pushConfirmPhone: signup.pushConfirmPhone
});

type ExportComponent = ComponentType<{}>;

export const SmsConfirmationButtonConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(SmsConfirmationButtonController);