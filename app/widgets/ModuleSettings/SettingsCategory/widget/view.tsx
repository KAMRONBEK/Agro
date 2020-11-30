import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IOwnProps {
  label: string;
  children: JSX.Element;
  containerStyle?: ViewStyle;
}

export function SettingsCategoryView({
  label,
  children,
  containerStyle
}: IOwnProps) {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={styles.labelBox}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.whiteBox}>
        {children}
      </View>
    </View>
  )
}
