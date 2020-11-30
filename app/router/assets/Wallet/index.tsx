import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import { Palette } from 'styles';

interface IOwnProps {
  color: string;
  focused: boolean;
}

export function Wallet({ color, focused }: IOwnProps) {
  return (
    <View style={[styles.icon, focused && styles.focused]}>
      <Svg width={19.843} height={19.71}>
        <G data-name="Group 670">
          <Path
            data-name="Path 115"
            d="M18.254 8.186h-.589V6.432a1.752 1.752 0 00-1.178-1.646V1.754A1.762 1.762 0 0014.721 0H2.944a1.762 1.762 0 00-1.767 1.754v3.031A1.752 1.752 0 000 6.432v10.524a1.762 1.762 0 001.767 1.754H15.9a1.762 1.762 0 001.767-1.754V15.2h.589a.586.586 0 00.589-.585V8.77a.586.586 0 00-.589-.585zM14.721 1.17a.587.587 0 01.589.585v.585a1.175 1.175 0 01-1.178-1.169zm-12.366.585a.587.587 0 01.589-.585h.589a1.175 1.175 0 01-1.178 1.169zM4.71 1.17h8.244a2.349 2.349 0 002.355 2.339v1.169H2.355v-1.17A2.349 2.349 0 004.71 1.169zm11.777 15.787a.587.587 0 01-.589.585H1.767a.587.587 0 01-.589-.585V6.432a.587.587 0 01.589-.585H15.9a.587.587 0 01.589.585v1.754h-2.355a3.525 3.525 0 00-3.534 3.508 3.525 3.525 0 003.533 3.508h2.355zm1.178-2.923h-3.533a2.349 2.349 0 01-2.355-2.339 2.349 2.349 0 012.355-2.339h3.533zm0 0"
            fill={color}
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  focused: {
    borderWidth: 1,
    borderColor: Palette.greenText,
    padding: 8,
    borderRadius: 30
  }
})
