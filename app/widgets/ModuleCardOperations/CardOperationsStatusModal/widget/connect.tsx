import { connect } from 'react-redux';
import { CardOperationsStatusModalController } from './controller';
import { IStoreState } from 'types';
import { compose } from 'utils';
import { ComponentType } from 'react';

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
  operationType: cardOperationsState.operationType,
  transfer: cardOperationsState.transfer,
  transferIsFetching: cardOperationsState.transferIsFetching,
  transferIsError: cardOperationsState.transferIsError
});

type ExportComponent = ComponentType<{}>;

export const CardOperationsStatusModalConnect = compose<ExportComponent>(
  connect(
    mapState
  ),
)(CardOperationsStatusModalController);
