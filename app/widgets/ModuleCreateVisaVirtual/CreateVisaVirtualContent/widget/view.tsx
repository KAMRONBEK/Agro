import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Cards } from 'widgets/ModuleShared';
import { CreateVisaVirtualHints, CreateVisaVirtualButton } from 'widgets/ModuleCreateVisaVirtual';
import { ICard } from 'types';

interface IOwnProps {
  cards: ICard[];
}

export function CreateVisaVirtualContentView({
  cards
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <Cards 
        cards={cards}
        activeCardTitle={'Выбрать карту'}
      />
      
      <View style={styles.chooseCardTextBox}>
        <Text style={styles.chooseCardText}>Выберите <Text style={styles.agrobank}>Agrobank</Text> карту, данные которой будут использоваться при открытии виртуальной Visa  карты</Text>
      </View>

      <CreateVisaVirtualHints />

      <CreateVisaVirtualButton />
    </View>
  )
}