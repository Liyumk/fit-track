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
  leftIcon?: React.ReactNode;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, textStyle, textClassName, leftIcon, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          {leftIcon}
          <Text className={`${styles.buttonText} ${textClassName}`} style={textStyle}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center justify-center bg-primary-main rounded-[28px] px-4 py-2 min-h-[32px]',
  buttonText: 'text-white text-md font-semibold text-center',
};
