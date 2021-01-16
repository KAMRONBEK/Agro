import { connect } from "react-redux";
import { SmsConfirmationButtonController } from "./controller";
import { Dispatch, RootState } from "store";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "router/withNavigation";

const mapState = ({ signup: signupState }: RootState) => ({
	confirmIsFetching: signupState.confirmIsFetching,
	signup: signupState.signup,
	signupIsFetching: signupState.signupIsFetching
});

const mapDispatch = ({ signup }: Dispatch) => ({
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
