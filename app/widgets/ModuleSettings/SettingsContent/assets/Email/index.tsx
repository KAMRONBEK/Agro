import React from 'react';
import Svg, { Path, G, Ellipse } from 'react-native-svg';
import { Palette } from 'styles';

export function Email() {
  return (
    <Svg width={22.617} height={17.737}>
      <G data-name="Group 678" fill={Palette.greyLightText} stroke={Palette.greyLightText} strokeWidth={0.7}>
        <Path
          data-name="Path 783"
          d="M20.222.35H1.396A1.046 1.046 0 00.35 1.396v13.945a1.046 1.046 0 001.046 1.046h18.826a1.046 1.046 0 001.046-1.046V1.396A1.046 1.046 0 0020.222.35zm.349 14.991a.349.349 0 01-.349.349H1.396a.349.349 0 01-.346-.349V1.396a.349.349 0 01.349-.349h18.823a.349.349 0 01.349.349z"
        />
        <Path
          data-name="Path 784"
          d="M19.792 1.869a.349.349 0 00-.491-.043l-8.043 6.753a.7.7 0 01-.9 0L2.313 1.826a.349.349 0 10-.448.534l8.043 6.756a1.393 1.393 0 001.794 0l8.043-6.756a.349.349 0 00.043-.491z"
        />
        <Path
          data-name="Path 785"
          d="M6.719 9.177l-4.881 5.229a.349.349 0 10.51.476l4.881-5.229a.349.349 0 10-.51-.476z"
        />
        <Path
          data-name="Path 786"
          d="M14.899 9.177a.349.349 0 10-.51.476l4.881 5.229a.349.349 0 00.51-.476z"
        />
      </G>
    </Svg>
  );
}
