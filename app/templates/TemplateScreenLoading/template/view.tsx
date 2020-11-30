import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export function TemplateScreenLoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size='large' />
    </View>
  )
}