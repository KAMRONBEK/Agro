import React from 'react';
import { View, Image, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY } from 'const';
import { ISupplier } from 'types';

interface IOwnProps {
  suppliers: ISupplier[];
  goToPayment: (id: number) => () => void;
}

export function PaymentInnerListView({
  suppliers,
  goToPayment
}: IOwnProps) {
  function renderItem({ index, item }: ListRenderItemInfo<ISupplier>) {
    return (
      <TouchableOpacity key={index} onPress={goToPayment(item.id)} activeOpacity={TOUCHABLE_OPACITY} style={styles.item}>
        <View style={styles.logoBox}>
          <Image source={{uri: item.image}} resizeMode="contain" style={styles.logo} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={suppliers}
        renderItem={renderItem}
        numColumns={3}
        style={styles.flatListContainer}
      />
    </View>
  )
}
