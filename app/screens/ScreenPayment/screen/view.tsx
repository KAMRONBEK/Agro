import React from 'react';
import { ScrollView, View } from 'react-native';
import { TemplateGreenBackground } from 'templates';
import { PaymentsContent } from 'widgets/ModulePayment';
import { styles } from './styles';

export function ScreenPaymentView() {
  return (
    <View style={styles.container}>
      <TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
        <PaymentsContent />
      </ScrollView>
    </View>
  )
}
