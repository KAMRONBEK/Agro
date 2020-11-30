import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { BranchesMap } from 'widgets/ModuleBranches';

export function ScreenBranchesView() {
  return (
    <View style={styles.container}>
      <BranchesMap />
    </View>
  )
}
