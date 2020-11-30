import { connect } from "react-redux";
import { SmsConfirmationFormController } from "./controller";
import { IStoreState, FieldType } from "types";
import { IDispatch } from "store";

const mapState = ({ signup }: IStoreState) => ({
  field: signup.codeField,
  phoneField: signup.fields.find(field => field.type === FieldType.Phone)
});

const mapDispatch = ({ signup }: IDispatch) => ({
  setCode: signup.setCode
});

export const SmsConfirmationFormConnect = connect(
  mapState,
  mapDispatch
)(SmsConfirmationFormController);