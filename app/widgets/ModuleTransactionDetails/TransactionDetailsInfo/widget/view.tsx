import React from 'react';
import { ITransactionDetails, ITransactionType } from 'types';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { PAYMENT_STATUS } from './consts';
import { strings } from "locales/i18n";

interface IOwnProps {
  details: ITransactionDetails;
}

export function  TransactionDetailsInfoView({
  details
}: IOwnProps) {
  console.log(details);
  return (
    <View style={styles.infoBox}>
      <Text style={styles.title}>{strings('details')}:</Text>
      <View style={styles.parameters}>
        <Text style={styles.parameter}>{strings('summ')}: <Text style={styles.parameterBold}>{details?.amount_commission ? details?.amount_commission : details?.amount}</Text> {strings('som')}</Text>
        <Text style={styles.parameter}>{strings('commission')}: <Text style={styles.parameterBold}>{details?.commission ? details?.commission : 0}</Text> {strings('som')}</Text>
        <Text style={styles.parameter}>{strings('transactionNumber')}: <Text style={styles.parameterBold}>{details?.payment_id}</Text></Text>
        <Text style={styles.parameter}>{strings('dateTime')}: <Text style={styles.parameterBold}>{details?.datetime}</Text></Text>
        <Text style={styles.parameter}>{strings('debitCard')}: <Text style={styles.parameterBold}>{details?.card_number}</Text></Text>
        {
          details?.type === ITransactionType.Transfer && (
           <Text style={styles.parameter}>{strings('senderFullName')}: <Text style={styles.parameterBold}>{details?.sender?.lastname} {details?.sender?.name} {details?.sender?.father_name}</Text></Text>
          )
        }
        {
          !!details?.title && <Text style={styles.parameter}>{details?.title}: <Text style={styles.parameterBold}>{details?.value}</Text></Text>
        }
        {
          !!details?.card_number_receiver && <Text style={styles.parameter}>{strings('recipientCard')}: <Text style={styles.parameterBold}>{details?.card_number_receiver}</Text></Text>
        }
        {
          details?.type === ITransactionType.Transfer && (
           <Text style={styles.parameter}>{strings('recipientFullName')}: <Text style={styles.parameterBold}>{details?.receiver?.lastname} {details?.receiver?.name} {details?.receiver?.father_name}</Text></Text>
          )
        }
        <Text style={styles.parameter}>{strings('status')}: <Text style={[styles.parameterBold, styles.parameterStatus]}>{PAYMENT_STATUS[details?.payment_status]}</Text></Text>
      </View>
    </View>
  )
}