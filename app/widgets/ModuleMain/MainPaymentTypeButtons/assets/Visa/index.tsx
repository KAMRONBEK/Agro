import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path, ClipPath } from "react-native-svg";

export function Visa() {
  return (
    <Svg width={66} height={21.209} viewBox="0 0 44 14.209">
      <Defs>
        <LinearGradient
          id="prefix__b"
          y1={0.373}
          x2={0.008}
          y2={0.373}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#222357" />
          <Stop offset={1} stopColor="#254aa5" />
        </LinearGradient>
        <ClipPath id="prefix__a">
          <Path
            d="M1827.578-497.66c-.025 1.979 1.764 3.084 3.111 3.74 1.385.674 1.85 1.106 1.844 1.708-.01.922-1.1 1.329-2.129 1.345a7.427 7.427 0 01-3.651-.868l-.643 3.011a10.7 10.7 0 003.953.729c3.734 0 6.177-1.843 6.19-4.7.014-3.627-5.017-3.828-4.982-5.449.012-.492.481-1.016 1.509-1.15a6.692 6.692 0 013.505.614l.625-2.913a9.53 9.53 0 00-3.327-.61c-3.515 0-5.986 1.868-6.006 4.542m15.338-4.291a1.62 1.62 0 00-1.513 1.008l-5.334 12.735h3.731l.743-2.052h4.56l.431 2.052h3.289l-2.87-13.744h-3.036m.522 3.713l1.077 5.161h-2.949l1.872-5.161m-20.384-3.713l-2.941 13.744h3.555l2.94-13.744h-3.554m-5.26 0l-3.7 9.354-1.5-7.954a1.657 1.657 0 00-1.64-1.4h-6.05l-.085.4a14.8 14.8 0 013.508 1.169 1.5 1.5 0 01.844 1.208l2.835 10.968h3.758l5.761-13.744h-3.734"
            transform="translate(-1804.822 502.203)"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path
          d="M0-164.739L43.353-180.7l9.863 26.781-43.353 15.961"
          transform="translate(-4.608 166.436)"
          fill="url(#prefix__b)"
        />
      </G>
    </Svg>
  )
}