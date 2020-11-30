import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Palette } from 'styles';

export function ChevronRight() {
  return (
    <Svg width={8.539} height={14.25}>
      <Path
        d="M.707 13.543l6.418-6.418L.707.707"
        fill="none"
        stroke={Palette.greyBorder}
        strokeWidth={2}
      />
    </Svg>
  );
}
