import { connect } from "react-redux";
import { CardOperationsBankCommissionController } from "./controller";
import { IStoreState, FieldType } from "types";

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  transferInfo: cardOperationsState.transferInfo,
  amount: cardOperationsState.fields.find(field => field.type === FieldType.Amount)
});

export const CardOperationsBankCommissionConnect = connect(
  mapState
)(CardOperationsBankCommissionController);