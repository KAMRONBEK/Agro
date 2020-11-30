import { connect } from "react-redux";
import { CreateVisaVirtualButtonController } from "./controller";
import { IDispatch } from "store";
import { IStoreState } from "types";

const mapState = ({ cards: cardsState }: IStoreState) => ({
  createVisaVirtualIsFetching: cardsState.createVisaVirtualIsFetching
});

const mapDispatch = ({ cards: cardsState }: IDispatch) => ({
  pushCreateVisaVirtual: cardsState.pushCreateVisaVirtual
});

export const CreateVisaVirtualButtonConnect = connect(
  mapState,
  mapDispatch
)(CreateVisaVirtualButtonController);