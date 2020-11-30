import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY, ROUTES } from 'const';
import { ChevronRight } from '../assets';
import { ICategory } from 'types';

interface IOwnProps {
  label: string;
  showAllServices: boolean;
  categories: ICategory[];
  routeTo: (id: number, name: string) => () => void;
}

export function PaymentsCategoriesView({
  label,
  categories,
  showAllServices,
  routeTo
}: IOwnProps) {
  function renderService(item: ICategory, index: number) {
    return (
      <View key={index} style={styles.serviceBox}>
        <TouchableOpacity onPress={routeTo(item.id, item.name)} activeOpacity={TOUCHABLE_OPACITY} style={styles.service}>
          <View style={styles.serviceIconBox}>
            <Image source={{uri: item.image}} resizeMode="contain" style={styles.serviceIcon} />
          </View>
          <Text numberOfLines={2} style={styles.serviceName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>{label}</Text>
        {
          showAllServices && <TouchableOpacity style={styles.openAllServicesButton} activeOpacity={TOUCHABLE_OPACITY}>
            <ChevronRight />
          </TouchableOpacity>
        }
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollContainer} horizontal>
        {categories?.map(renderService)}
      </ScrollView>
    </View>
  )
}
