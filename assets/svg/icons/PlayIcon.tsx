import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface PlayIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const PlayIcon = ({ size = 24, color = 'currentColor', ...props }: PlayIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
      <Path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PlayIcon;
