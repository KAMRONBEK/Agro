import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Palette } from 'styles';

export function Phone() {
  return (
    <Svg width={16.441} height={27.943}>
      <G data-name="Group 681">
        <Path
          data-name="Path 787"
          d="M13.292.2H2.149A1.952 1.952 0 00.2 2.148v22.646a1.952 1.952 0 001.949 1.948h11.143a1.95 1.95 0 001.949-1.948V2.148A1.95 1.95 0 0013.292.2zM1.086 3.738h13.271V20.55H1.086zm1.063-2.652h11.143a1.065 1.065 0 011.065 1.062v.707H1.086v-.707a1.064 1.064 0 011.063-1.062zm11.143 24.771H2.149a1.064 1.064 0 01-1.063-1.062v-3.362h13.271v3.362a1.065 1.065 0 01-1.065 1.062zm0 0"
          fill={Palette.greyLightText}
          stroke={Palette.greyLightText}
          strokeWidth={0.4}
        />
      </G>
    </Svg>
  );
}
