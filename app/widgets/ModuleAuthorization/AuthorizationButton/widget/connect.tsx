import { connect } from "react-redux";
import { AuthorizationButtonController } from "./controller";
import { IDispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";
import { withNavigation } from "react-navigation";
import { ComponentType } from "react";

const mapState = ({ login: loginState }: IStoreState) => ({
  loginIsFetching: loginState.loginIsFetching,
  login: loginState.login
});


const mapDispatch = ({ login: loginState, cards: cardsState }: IDispatch) => ({
  pushLogin: loginState.pushLogin
});

type ExportComponent = ComponentType<{}>;

export const AuthorizationButtonConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(AuthorizationButtonController);