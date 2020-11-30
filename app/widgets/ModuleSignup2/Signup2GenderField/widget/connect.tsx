import { connect } from 'react-redux';
import { Signup2GenderFieldController } from './controller';
import { IStoreState, FieldType } from 'types';

const mapState = ({ signup2: signup2State }: IStoreState) => ({
  field: signup2State.fields.find(field => field.type === FieldType.Gender)
});

export const Signup2GenderFieldConnect = connect(
  mapState
)(Signup2GenderFieldController);