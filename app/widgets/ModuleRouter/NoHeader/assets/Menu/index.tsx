import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export function Menu() {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <G opacity="0.5">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 9.33333V7H24.5V9.33333H3.5ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 21H24.5V18.6667H3.5V21Z"
          fill="white"
        />
      </G>
    </Svg>
  );
}
