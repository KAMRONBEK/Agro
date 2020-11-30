import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TOUCHABLE_OPACITY, ROUTES } from 'const';
import { ChevronRight } from '../assets';
import { IService } from 'widgets/ModulePayment/PaymentsContent/widget/contants';

interface IOwnProps {
  label: string;
  data: IService[];
  showAllServices: boolean;
  routeTo: (routeName?: ROUTES) => () => void;
}

export function PaymentsCategoriesBoxView({
  label,
  data,
  showAllServices,
  routeTo
}: IOwnProps) {
  function renderService(item: IService, index: number) {
    return (
      <View key={index} style={styles.serviceBox}>
        <TouchableOpacity onPress={routeTo(item.routeName)} activeOpacity={TOUCHABLE_OPACITY} style={styles.service}>
          <View style={styles.serviceIconBox}>
            {item.icon}
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
          showAllServices && <TouchableOpacity onPress={routeTo()} style={styles.openAllServicesButton} activeOpacity={TOUCHABLE_OPACITY}>
            <ChevronRight />
          </TouchableOpacity>
        }
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollContainer} horizontal>
        {data?.map(renderService)}
      </ScrollView>
    </View>
  )
}
