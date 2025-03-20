import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { CheckIcon, PlayIcon } from '../../assets/svg/icons';
import { ColorPath, getColor } from '../../theme/colors';

type ExerciseCircleProps = {
  image?: string;
  size?: number;
  isDone?: boolean;
  isActive?: boolean;
  isEditMode?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  onDelete?: () => void;
  borderWidth?: number;
  activeColor?: ColorPath;
  inactiveColor?: ColorPath;
  selectedBadgeColor?: ColorPath;
  activeBadgeColor?: ColorPath;
  isDragging?: boolean;
};

export const ExerciseCircle = ({
  image,
  size = 72,
  isActive = false,
  isDone = false,
  onPress,
  onLongPress,
  onDelete,
  borderWidth = 2,
  activeColor = 'primary.main',
  inactiveColor = 'white',
  selectedBadgeColor = 'primary.main',
  activeBadgeColor = 'primary.main',
  isEditMode = false,
  isDragging = false,
}: ExerciseCircleProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      className={twMerge(styles.container, isDragging && 'opacity-50')}
      style={{
        width: size,
        height: size,
      }}>
      <View
        className={twMerge(styles.circle, isActive && 'bg-primary-main')}
        style={{
          borderWidth,
          borderColor: isActive && !isEditMode ? getColor(activeColor) : getColor(inactiveColor),
          backgroundColor: getColor(inactiveColor),
          width: size * 0.8888,
          height: size * 0.8888,
        }}>
        {image && (
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: image }}
            className={styles.image}
          />
        )}
      </View>

      {isEditMode && (
        <TouchableOpacity
          onPress={onDelete}
          className="absolute -right-2 top-0 h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500">
          <Ionicons name="remove" size={12} color="white" />
        </TouchableOpacity>
      )}

      {!isEditMode && isDone && !isActive && (
        <View
          className={styles.badge}
          style={{
            backgroundColor: getColor(selectedBadgeColor),
          }}>
          <CheckIcon size={12} color={getColor('text.primary')} />
        </View>
      )}
      {!isEditMode && isActive && (
        <View
          className={styles.badge}
          style={{
            backgroundColor: getColor(activeBadgeColor),
          }}>
          <PlayIcon size={10} color={getColor('text.primary')} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  container:
    'relative items-center justify-center rounded-full border-2 border-white p-1 bg-background ',
  circle: 'w-full h-full rounded-full items-center justify-center overflow-hidden',
  image: 'w-full h-full',
  badge:
    'absolute border-2 border-white bottom-1 right-1 rounded-full w-6 h-6 items-center justify-center',
};
