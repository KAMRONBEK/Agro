import { connect } from "react-redux";
import { ScreenCreateVisaVirtualController } from "./controller";
import { IStoreState } from "types";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  createVisaVirtual: cardsState.createVisaVirtual
});

export const ScreenCreateVisaVirtualConnect = connect(
  mapState
)(ScreenCreateVisaVirtualController);