import React from 'react';
import { View } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { styles } from './styles';
import { Palette } from 'styles';
import { setAlpha } from 'utils';
import { switchOptions } from './constants';
import { OperationType } from 'types';

interface IOwnProps {
  setType: (value: OperationType) => void;
}

export function CardOperationsTypeView({
  setType
}: IOwnProps) {
  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        onPress={setType}
        animationDuration={300}
        textColor={Palette.white}
        selectedColor={Palette.white}
        buttonColor={setAlpha(Palette.white, 0.1)}
        backgroundColor={Palette.transparent}
        options={switchOptions}
        selectedTextStyle={styles.switchText}
        textStyle={styles.switchText}
        height={40}
        style={styles.switch}
      />
    </View>
  )
}
