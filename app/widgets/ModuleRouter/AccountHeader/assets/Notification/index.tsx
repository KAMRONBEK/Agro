import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Palette } from 'styles';

export function Notification() {
  return (
    <Svg width={22.95} height={27}>
      <Path
        d="M11.475 27a2.708 2.708 0 002.7-2.7h-5.4a2.708 2.708 0 002.7 2.7zm8.775-8.1v-7.425A8.687 8.687 0 0013.5 2.97v-.945a2.025 2.025 0 10-4.05 0v.945a8.687 8.687 0 00-6.75 8.505V18.9L0 21.6v1.35h22.95V21.6zm-2.7 1.35H5.4v-8.775a6.075 6.075 0 1112.15 0z"
        fill={Palette.white}
      />
    </Svg>
  );
}
