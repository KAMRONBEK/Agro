import { connect } from "react-redux";
import { CardOperationsRecipientCardController } from "./controller";
import { IStoreState, FieldType } from "types";
import { IDispatch } from "store";

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  field: cardOperationsState.fields.find(field => field.type === FieldType.CardNumberReceiver),
  transferIsFetching: cardOperationsState.transferIsFetching
});

const mapDispatch = ({ cardOperations: cardOperationsState }: IDispatch) => ({
  setField: cardOperationsState.pushCardField 
});

export const CardOperationsRecipientCardConnect = connect(
  mapState,
  mapDispatch
)(CardOperationsRecipientCardController);