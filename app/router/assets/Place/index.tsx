import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import { Palette } from 'styles';

interface IOwnProps {
  color: string;
  focused: boolean;
}

export function Place({ color, focused }: IOwnProps) {
  return (
    <View style={[styles.icon, focused && styles.focused]}>
      <Svg width={17.547} height={22.514}>
        <G data-name="Group 159" fill={color}>
          <Path
            data-name="Path 116"
            d="M16.978 21.238l-2.9-6.139a.543.543 0 00-.279-.268l-1.444-.643 2.5-4.188.017-.031a6.852 6.852 0 00-1.29-7.994A6.849 6.849 0 002.676 9.966l.017.034 2.5 4.193-1.452.646a.543.543 0 00-.27.264l-2.9 6.139a.543.543 0 00.712.728l3.636-1.619 3.636 1.619a.543.543 0 00.442 0l3.636-1.619 3.636 1.619a.543.543 0 00.712-.728zM3.013 6.813a5.79 5.79 0 015.679-5.726 5.764 5.764 0 015.221 8.368l-4.67 7.832a.543.543 0 01-.933 0L3.635 9.455a5.7 5.7 0 01-.622-2.642zm9.839 12.445a.543.543 0 00-.442 0l-3.636 1.619-3.631-1.62a.543.543 0 00-.442 0l-2.519 1.121 2.19-4.633 1.387-.617 1.62 2.715a1.63 1.63 0 002.8 0l1.62-2.714 1.387.617 2.19 4.633z"
          />
          <Path
            data-name="Subtraction 3"
            d="M1.061 22.014a.546.546 0 01-.389-.164.547.547 0 01-.1-.612l2.9-6.14a.539.539 0 01.269-.263l1.453-.646h1.24c.518.9 1.78 2.982 2.333 2.982.613 0 1.492-1.506 2.267-2.834l.087-.148h1.232l1.444.643a.54.54 0 01.279.268l2.9 6.138a.544.544 0 01-.1.612.537.537 0 01-.389.163.541.541 0 01-.22-.046l-3.635-1.619-3.636 1.619a.536.536 0 01-.221.047.536.536 0 01-.221-.047l-3.635-1.619-3.635 1.619a.549.549 0 01-.223.047zm3.856-2.8a.536.536 0 01.221.047l3.636 1.619 3.635-1.619a.536.536 0 01.221-.047.536.536 0 01.221.047l2.519 1.123-2.191-4.633-1.387-.617-1.493 2.714a1.829 1.829 0 01-1.525.795 1.618 1.618 0 01-1.4-.795l-1.619-2.715-1.387.618-2.19 4.633 2.518-1.123a.536.536 0 01.221-.051z"
            stroke="rgba(0,0,0,0)"
            strokeMiterlimit={10}
          />
          <Path
            data-name="Path 117"
            d="M11.234 6.848a2.479 2.479 0 10-2.479 2.479 2.482 2.482 0 002.479-2.479zm-3.872 0a1.393 1.393 0 111.393 1.393 1.394 1.394 0 01-1.39-1.393z"
          />
        </G>
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
