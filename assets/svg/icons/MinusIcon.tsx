import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

interface MinusIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const MinusIcon = ({ size = 20, color = '#FEFEFE', ...props }: MinusIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Rect width={20} height={20} rx={10} fill="#990D35" />
      <Path
        d="M5.75 9.25C5.33579 9.25 5 9.58579 5 10C5 10.4142 5.33579 10.75 5.75 10.75L14.25 10.75C14.6642 10.75 15 10.4142 15 10C15 9.58579 14.6642 9.25 14.25 9.25H5.75Z"
        fill={color}
      />
    </Svg>
  );
};

export default MinusIcon;
