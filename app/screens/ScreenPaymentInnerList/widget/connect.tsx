import { connect } from "react-redux";
import { ScreenPaymentInnerListController } from "./controller";
import { IStoreState } from "types";

const mapState = ({ suppliers }: IStoreState) => ({
  suppliersIsFetching: suppliers.suppliersIsFetching
});

export const ScreenPaymentInnerListConnect = connect(
  mapState
)(ScreenPaymentInnerListController);