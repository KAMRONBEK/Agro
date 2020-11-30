import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AddCardButtons } from 'widgets/ModuleAddCard';

export function AddCardContentView() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Какой тип карты Вы хотите добавить?</Text>
      </View>
      
      <AddCardButtons />
    </View>
  )
}