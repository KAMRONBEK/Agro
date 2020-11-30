import AsyncStorage from '@react-native-community/async-storage';
import { apiQwerty } from 'utils';
import { ACCEPT_LANGUAGE, AUTHORIZATION, TRANSACTIONS, TRANSACTION_DETAILS } from 'api';
import { ITransactionsData, ITransactionDetailsParams, ITransactionDetails } from 'types';
import { Locale, USER_TOKEN } from 'const';

export async function callTransactions() {
  return apiQwerty.get<ITransactionsData>(
    TRANSACTIONS,
    {
      headers: {
        [AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN),
        [ACCEPT_LANGUAGE]: Locale.RU
      }
    }
  )
  .then((response) => response.data)
  .catch((err) => err.response.data)
}

export async function callTransactionDetails(params: ITransactionDetailsParams) {
  return apiQwerty.get<ITransactionDetails[]>(
    TRANSACTION_DETAILS(params),
    {
      headers: {
        [AUTHORIZATION]: await AsyncStorage.getItem(USER_TOKEN),
        [ACCEPT_LANGUAGE]: Locale.RU
      }
    }
  )
  .then((response) => response.data)
  .catch((err) => err.response.data)
}