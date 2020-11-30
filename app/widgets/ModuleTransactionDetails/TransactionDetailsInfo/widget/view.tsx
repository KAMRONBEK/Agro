import React from 'react';
import { ITransactionDetails, ITransactionType } from 'types';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { PAYMENT_STATUS } from './consts';

interface IOwnProps {
  details: ITransactionDetails;
}

export function  TransactionDetailsInfoView({
  details
}: IOwnProps) {
  console.log(details);
  return (
    <View style={styles.infoBox}>
      <Text style={styles.title}>Детали:</Text>
      <View style={styles.parameters}>
        <Text style={styles.parameter}>Сумма: <Text style={styles.parameterBold}>{details?.amount_commission ? details?.amount_commission : details?.amount}</Text> сум</Text>
        <Text style={styles.parameter}>Комиссия: <Text style={styles.parameterBold}>{details?.commission ? details?.commission : 0}</Text> сум</Text>
        <Text style={styles.parameter}>Номер транзакции: <Text style={styles.parameterBold}>{details?.payment_id}</Text></Text>
        <Text style={styles.parameter}>Время проведения: <Text style={styles.parameterBold}>{details?.datetime}</Text></Text>
        <Text style={styles.parameter}>Карта списания: <Text style={styles.parameterBold}>{details?.card_number}</Text></Text>
        {
          details?.type === ITransactionType.Transfer && (
           <Text style={styles.parameter}>ФИО отправителя: <Text style={styles.parameterBold}>{details?.sender?.lastname} {details?.sender?.name} {details?.sender?.father_name}</Text></Text>
          )
        }
        {
          !!details?.title && <Text style={styles.parameter}>{details?.title}: <Text style={styles.parameterBold}>{details?.value}</Text></Text>
        }
        {
          !!details?.card_number_receiver && <Text style={styles.parameter}>Карта получателя: <Text style={styles.parameterBold}>{details?.card_number_receiver}</Text></Text>
        }
        {
          details?.type === ITransactionType.Transfer && (
           <Text style={styles.parameter}>ФИО получателя: <Text style={styles.parameterBold}>{details?.receiver?.lastname} {details?.receiver?.name} {details?.receiver?.father_name}</Text></Text>
          )
        }
        <Text style={styles.parameter}>Статус: <Text style={[styles.parameterBold, styles.parameterStatus]}>{PAYMENT_STATUS[details?.payment_status]}</Text></Text>
      </View>
    </View>
  )
}