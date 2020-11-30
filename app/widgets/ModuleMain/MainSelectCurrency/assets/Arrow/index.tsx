import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Palette } from 'styles';

export function Arrow() {
  return (
    <Svg width={13.813} height={8.32}>
      <Path
        d="M13.107.706l-6.2 6.2-6.2-6.2"
        fill="none"
        stroke={Palette.white}
        strokeWidth={2}
      />
    </Svg>
  );
}
