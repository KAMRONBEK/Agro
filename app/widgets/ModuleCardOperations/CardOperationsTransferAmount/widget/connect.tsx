import React from 'react';
import { connect } from 'react-redux';
import { IStoreState, FieldType } from 'types';
import { IDispatch } from 'store';
import { CardOperationsTransferAmountController } from './controller';

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  operationType: cardOperationsState.operationType,
  field: cardOperationsState.fields.find(field => field.type === FieldType.Amount),
  transferIsFetching: cardOperationsState.transferIsFetching
});

const mapDispatch = ({ cardOperations: cardOperationsState }: IDispatch) => ({
  setField: cardOperationsState.setField
});

export const CardOperationsTransferAmountConnect = connect(
  mapState,
  mapDispatch
)(CardOperationsTransferAmountController);
