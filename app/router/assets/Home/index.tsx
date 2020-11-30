import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import { Palette } from 'styles';

interface IOwnProps {
  color: string;
  focused: boolean;
}

export function Home({ color, focused }: IOwnProps) {
  return (
    <View style={[styles.icon, focused && styles.focused]}>
      <Svg width={19.265} height={19.831}>
        <Path
          d="M18.898 8.038L10.06.292a.65.65 0 00-.857 0L.365 8.038a.65.65 0 00.857.977l.684-.6v9.665a.65.65 0 00.65.65h14.152a.65.65 0 00.65-.65V8.42l.684.6a.65.65 0 00.857-.977zM8.132 17.431v-5.354h3v5.353h-3zm7.926-10.149v10.149h-3.625v-6a.65.65 0 00-.65-.65h-4.3a.65.65 0 00-.65.65v6H3.207V7.281s0 0 0 0l6.426-5.632 6.426 5.632s-.001-.002-.001 0z"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        />
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
