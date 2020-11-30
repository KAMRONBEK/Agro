import { connect } from 'react-redux';
import { Signup2FieldController, IOwnProps } from './controller';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { compose } from 'utils';
import { ComponentType } from 'react';

const mapState = ({ signup2: signup2State }: IStoreState, { type }: IOwnProps) => ({
  field: signup2State.fields.find(field => field.type === type)
});

const mapDispatch = ({ signup2: signup2State }: IDispatch) => ({
  setField: signup2State.setField
});

type ExportComponent = ComponentType<IOwnProps>;

export const Signup2FieldConnect = compose<ExportComponent>(
  connect(
    mapState,
    mapDispatch
  )
)(Signup2FieldController);