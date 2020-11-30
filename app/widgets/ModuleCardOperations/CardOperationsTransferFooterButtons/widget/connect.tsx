import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { ComponentType } from "react";
import { CardOperationsTransferFooterButtonsController } from "./controller";
import { IDispatch } from "store";
import { IStoreState } from "types";
import { compose } from "utils";

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  transferIsFetching: cardOperationsState.transferIsFetching
});

const mapDispatch = ({ cardOperations: cardOperationsState }: IDispatch) => ({
  pushTransferCardToken: cardOperationsState.pushTransferCardToken,
  resetState: cardOperationsState.resetState
});

type ExportComponent = ComponentType<{}>;

export const CardOperationsTransferFooterButtonsConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
  withNavigation
)(CardOperationsTransferFooterButtonsController);