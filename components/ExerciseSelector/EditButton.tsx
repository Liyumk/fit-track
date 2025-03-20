import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { getColor } from '../../theme/colors';

type EditButtonProps = {
  size?: number;
  onPress?: () => void;
  isEditMode?: boolean;
};

export const EditButton: React.FC<EditButtonProps> = ({
  size = 72,
  onPress,
  isEditMode = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        'relative items-center justify-center rounded-full border-2 p-1',
        isEditMode ? 'border-primary-main' : 'border-white'
      )}
      style={{
        width: size,
        height: size,
      }}>
      <View
        className="h-full w-full items-center justify-center rounded-full bg-gray-100"
        style={{
          width: size * 0.8888,
          height: size * 0.8888,
        }}>
        <Ionicons
          name="pencil"
          size={24}
          color={isEditMode ? getColor('primary.main') : getColor('text.secondary')}
        />
      </View>
    </TouchableOpacity>
  );
};
