import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface ExerciseIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export const ExerciseIcon = ({
  size = 24,
  color = 'currentColor',
  ...props
}: ExerciseIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
      <Path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ExerciseIcon;
