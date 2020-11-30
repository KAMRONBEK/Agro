import React from 'react';
import Svg, { Path, G, Ellipse } from 'react-native-svg';
import { Palette } from 'styles';

export function Profile() {
  return (
    <Svg width={25.415} height={25.46}>
      <G data-name="Group 677" fill="none" stroke={Palette.greyLightText} strokeWidth={1.3}>
        <G data-name="Ellipse 22" transform="translate(5.233)">
          <Ellipse cx={7.5} cy={9} rx={7.5} ry={9} stroke="none" />
          <Ellipse cx={7.5} cy={9} rx={6.85} ry={8.35} />
        </G>
        <Path data-name="Path 781" d="M7.141 14.596S.105 18.513.685 25.405" />
        <Path data-name="Path 782" d="M21.072 17.028s3.116 2.574 3.7 8.159" />
      </G>
    </Svg>
  );
}
