import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Palette } from 'styles';

export function ChevronRight() {
  return (
    <Svg width={10.121} height={17.414}>
      <Path
        d="M.707 16.707l8-8-3.333-3.333L.707.707"
        fill="none"
        stroke={Palette.greyDay}
        strokeWidth={2}
      />
    </Svg>
  );
}
