import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Palette } from 'styles';

export function Eye() {
  return (
    <Svg width={22.431} height={13.371}>
      <G data-name="Group 594">
        <Path
          data-name="Path 503"
          d="M11.216 0C6.93 0 3.044 2.345.176 6.153a.888.888 0 000 1.06c2.868 3.813 6.754 6.158 11.04 6.158s8.172-2.345 11.04-6.153a.888.888 0 000-1.06C19.388 2.345 15.5 0 11.216 0zm.307 11.393a4.718 4.718 0 114.4-4.4 4.721 4.721 0 01-4.4 4.4zm-.142-2.175a2.54 2.54 0 112.372-2.372 2.536 2.536 0 01-2.372 2.372z"
          fill={Palette.greenLeaf}
        />
      </G>
    </Svg>
  );
}
