import { connect } from 'react-redux';
import { IStoreState, FieldType } from 'types';
import { CardOperationsInfoController } from './controller';

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  cardInfo: cardOperationsState.cardInfo,
  cardImgInfo: cardOperationsState.cardImgInfo,
  transferInfo: cardOperationsState.transferInfo,
  amount: cardOperationsState.fields.find(field => field.type === FieldType.Amount)
});

export const CardOperationsInfoConnect = connect(
  mapState
)(CardOperationsInfoController);