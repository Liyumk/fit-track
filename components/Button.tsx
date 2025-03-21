import { forwardRef } from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type ButtonProps = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  textClassName?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, textStyle, textClassName, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <Text className={`${styles.buttonText} ${textClassName}`} style={textStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button:
    'items-center justify-center bg-primary-main rounded-[28px] px-4 py-2 min-h-[32px] min-w-[98px]',
  buttonText: 'text-white text-md font-semibold text-center',
};
