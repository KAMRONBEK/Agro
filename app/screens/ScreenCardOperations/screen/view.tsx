import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { TemplateGreenBackground } from 'templates';
import { View } from 'react-native';
import {
  CardOperationsRecipientCard,
  CardOperationsTransferAmount,
  CardOperationsBankCommission,
  CardOperationsTransferFooterButtons,
  CardOperationsType,
  CardOperationsRequestFooterButton,
  CardOperationsInfo,
  CardOperationsStatusModal
} from 'widgets/ModuleCardOperations';
import { OperationType, ICard, CardTypes } from 'types';
import { Cards } from 'widgets/ModuleShared';

interface IOwnProps {
  cards: ICard[];
  operationType: OperationType;
}

export function ScreenCardOperationsView({
  cards,
  operationType
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableAutomaticScroll
        enableOnAndroid
      >
        <TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
        <CardOperationsType />
        <Cards
          cards={cards}
          activeCardTitle={
            operationType === OperationType.Transfer ? 
              'Выбрать карту для списания' : 'Выбрать карту для пополнения'
          } 
        />
        {
          operationType === OperationType.Transfer && <CardOperationsRecipientCard />
        }
        <CardOperationsInfo />
        <CardOperationsTransferAmount />
        <CardOperationsBankCommission />
        {
          operationType === OperationType.Transfer ? <CardOperationsTransferFooterButtons /> : <CardOperationsRequestFooterButton />
        }
      </KeyboardAwareScrollView>

      <CardOperationsStatusModal />
    </View>
  )
}
