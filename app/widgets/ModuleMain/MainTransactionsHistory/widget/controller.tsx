import React, { Component } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { MainTransactionsHistoryView } from './view';
import { ITransaction, ITransactionType, ITransactionDetailsParams } from 'types';
import { NavigationScreenProp } from 'react-navigation';
import { ROUTES } from 'const';

interface IConnectProps {
  transactions: ITransaction[];
  transactionsIsFetching: boolean;
  navigation: NavigationScreenProp<void>;
  pushTransactionDetails: (params: ITransactionDetailsParams) => void;
}

export class MainTransactionsHistoryController extends Component<IConnectProps> {
  modalRef = React.createRef<BottomSheet>();

  openModal = (index: number) => () => {    
    this.modalRef.current.snapTo(index);
  } 

  details = (id: number) => () => {
    const { navigation, pushTransactionDetails } = this.props;

    pushTransactionDetails({ id });
    
    navigation.navigate(ROUTES.SCREEN_TRANSACTION_DETAILS);
  }

  render() {
    const { transactionsIsFetching, transactions } = this.props;
    const transfers = transactions?.filter(transaction => transaction.type === ITransactionType.Transfer)
      .filter(transaction => !!transaction.payment_status)
      .filter(transaction => Number(transaction.payment_status) > 0)
    const payments = transactions?.filter(transaction => transaction.type !== ITransactionType.Transfer);
    const filteredTransactions = [ ...payments, ...transfers ];
    
    return (
      <MainTransactionsHistoryView
        modalRef={this.modalRef}
        transactions={filteredTransactions}
        transactionsIsFetching={transactionsIsFetching}
        openModal={this.openModal}
        details={this.details}
      />
    )
  }
}
