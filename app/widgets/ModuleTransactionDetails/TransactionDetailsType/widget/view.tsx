import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { ITransactionDetails, ITransactionType } from 'types';

interface IOwnProps {
  details: ITransactionDetails;
  detailsIsFetching: boolean;
}

export function TransactionDetailsTypeView({ 
  details,
  detailsIsFetching
}: IOwnProps) {
  const typeName = details?.service_category_name ? details?.service_category_name : details?.service_name;

  function renderType() {
    return (
      <View style={styles.typeBox}>
        <Text style={styles.typeName}>{typeName}</Text>
        <View style={[styles.typeLogoBox, details?.type === ITransactionType.Transfer && styles.typeLogoTransferBox]}>
          <Image style={styles.typeLogo} source={{ uri: details?.logo }} resizeMode='contain' />          
        </View>
      </View>
    )
  }

  function renderContent() {
    return (
      <View style={styles.content}>
        { renderType() }
      </View>
    )
  }

  function renderActivityLoader() {
    return (
      <View style={styles.loaderBox}>
        <ActivityIndicator animating={detailsIsFetching} size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      { !detailsIsFetching ? renderContent() : renderActivityLoader() }
    </View>
  )
}