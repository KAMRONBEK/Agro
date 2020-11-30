import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { CreateVisaVirtualContent } from 'widgets/ModuleCreateVisaVirtual';
import { TemplateGreenBackground } from 'templates';

export function ScreenCreateVisaVirtualView() {
  return (
    <View style={styles.container}>
      <TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TemplateGreenBackground showLogo={false} style={[styles.greenInnerBg]} />
        <CreateVisaVirtualContent />
      </ScrollView>
    </View>
  )
}