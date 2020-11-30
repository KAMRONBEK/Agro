import React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from 'types';
import { IDispatch } from 'store';
import { CardOperationsTypeController } from './controller';

const mapState = ({}: IStoreState) => ({

});

const mapDispatch = ({ cardOperations }: IDispatch) => ({
  setOperationType: cardOperations.setOperationType
});

export const CardOperationsTypeConnect = connect(
  mapState,
  mapDispatch
)(CardOperationsTypeController);
