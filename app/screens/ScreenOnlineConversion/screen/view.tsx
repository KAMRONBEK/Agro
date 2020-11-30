import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { TemplateGreenBackground } from 'templates';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  OnlineConversionType,
  OnlineConversionTypeCurrency,
  OnlineCurrencyAccount,
  OnlineCurrencyMFI,
  OnlineConversionField,
  OnlineConversionCard,
  OnlineConversionSavePattern,
  OnlineConversationAccept
} from 'widgets/ModuleOnlineConversion';

export function ScreenOnlineConversionView() {
  return (
    <View style={styles.container}>
      <TemplateGreenBackground showLogo={false} style={[styles.greenBg]} />
      <OnlineConversionType />
      <OnlineConversionTypeCurrency />
      <KeyboardAwareScrollView scrollEnabled enableAutomaticScroll enableOnAndroid>
        <OnlineCurrencyAccount />
        <OnlineCurrencyMFI />
        <OnlineConversionField />
        <OnlineConversionCard />
        <OnlineConversionSavePattern />
        <OnlineConversationAccept />
      </KeyboardAwareScrollView>
    </View>
  )
}
