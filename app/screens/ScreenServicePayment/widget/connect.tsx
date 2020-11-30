import { connect } from 'react-redux';
import { ScreenServicePaymentController } from './controller';
import { IDispatch } from 'store';
import { IStoreState, CardTypes } from 'types';

const mapState = ({ supplier: supplierState, cards: cardsState }: IStoreState) => ({
  cards: cardsState.cards.filter(card => card.card_type === CardTypes.Uzcard),
  supplierIsFetching: supplierState.supplierIsFetching
});

const mapDispatch = ({ supplier }: IDispatch) => ({
  resetSupplierState: supplier.resetState
});

export const ScreenServicePaymentConnect = connect(
  mapState,
  mapDispatch
)(ScreenServicePaymentController);