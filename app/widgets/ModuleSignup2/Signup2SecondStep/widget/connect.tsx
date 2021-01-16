import { connect } from 'react-redux';
import { Signup2SecondStepController } from './controller';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';
import { ComponentType } from 'react';
import { compose } from 'utils';

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  phone: signup2State.fields.find(field => field.type === FieldType.Phone),
  code: signup2State.codeField,
  confirmPhone: signup2State.confirmPhone,
  signup: signup2State.signup
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  setCode: signup2State.setCode,
  pushConfirmPhone: signup2State.pushConfirmPhone,
  resetSecondStep: signup2State.resetSecondStep,
  pushSignup: signup2State.pushSignup
});

type ExportComponent = ComponentType<{}>;

export const Signup2SecondStepConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  ),
)(Signup2SecondStepController);
