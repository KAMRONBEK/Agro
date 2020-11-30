import React from 'react';
import { View } from "react-native";
import { ServicePaymentSelectButton, ServicePaymentSelectItemButton } from 'widgets/ModuleServicePayment';
import { styles } from './styles';

interface IOwnProps {
  selectValue: number;
}

export function ServicePaymentSelectContentView({
  selectValue
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <ServicePaymentSelectButton />
      {
        !!selectValue && <ServicePaymentSelectItemButton />
      }
    </View>
  )
}