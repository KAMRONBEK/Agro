import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { AddCardContent } from 'widgets/ModuleAddCard';

export function ScreenAddCardView() {
  return (
    <View style={styles.container}>
      <AddCardContent />
    </View>
  )
}