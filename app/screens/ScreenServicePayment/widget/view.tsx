import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { TemplateGreenBackground } from 'templates';
import { 
  ServicePaymentFooterButtons, 
  ServicePaymentField, 
  ServicePaymentAmount, 
  ServicePaymentSavePattern, 
  ServicePaymentSelectContent,
  ServicePaymentStatusModal,
} from 'widgets/ModuleServicePayment';
import { Cards } from 'widgets/ModuleShared';
import { ICard, CardTypes } from 'types';

interface IOwnProps {
  supplierIsFetching: boolean;
  cards: ICard[];
}

export function ScreenServicePaymentView({
  supplierIsFetching,
  cards
}: IOwnProps) {
  function renderForm() {
    return (
      <>
        <ServicePaymentSelectContent />
        <ServicePaymentField />
        <ServicePaymentAmount />
      </>
    )
  }

  function renderLoader() {
    return (
      <View style={styles.loaderBox}>
        <ActivityIndicator size='large' animating={true} />
        <Text style={styles.loaderText}>Загрузка формы</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableAutomaticScroll
        enableOnAndroid
      >
        <TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
        <Cards cards={cards} showAddCard={false} />
        {
          supplierIsFetching ? renderLoader() : renderForm()
        }
        <ServicePaymentSavePattern />
        <ServicePaymentFooterButtons />
      </KeyboardAwareScrollView>

      <ServicePaymentStatusModal />
    </View>
  )
}
