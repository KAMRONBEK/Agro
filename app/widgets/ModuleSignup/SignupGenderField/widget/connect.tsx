import { connect } from "react-redux";
import { SignupGenderFieldController } from "./controller";
import { IStoreState, FieldType } from "types";

const mapState = ({ signup }: IStoreState) => ({
  field: signup.fields.find(field => field.type === FieldType.Gender)
});

export const SignupGenderFieldConnect = connect(
  mapState
)(SignupGenderFieldController);