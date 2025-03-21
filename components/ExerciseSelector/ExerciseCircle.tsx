import { Feather } from '@expo/vector-icons';
import { useWorkout } from 'context/WorkoutContext';
import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import BadgeSmall from './BadgeSmall';
interface ExerciseCircleProps {
  image?: string;
  size?: number;
  onDelete?: () => void;
  index: number;
}

export const ExerciseCircle = ({ image, size = 72, onDelete, index }: ExerciseCircleProps) => {
  const circleSize = size * 0.8888;
  const { setIsEditMode, currentExerciseIndex, selectExercise, isEditMode, workout } = useWorkout();
  const isActive = currentExerciseIndex === index;
  const isActiveBadge = isActive && !isEditMode;
  const isLastItem = index === workout?.exercises?.length;
  const isAddExerciseButton = isEditMode && isLastItem;

  const onExerciseLongPress = () => {
    setIsEditMode(true);
  };

  const onSelectExercise = (index: number) => {
    if (isEditMode) {
      if (isAddExerciseButton) {
        //Add more exercises
      }
      return;
    }

    selectExercise(index);
  };

  return (
    <TouchableOpacity
      onPress={() => onSelectExercise(index)}
      onLongPress={onExerciseLongPress}
      className={twMerge(styles.container, isActiveBadge && 'border-primary')}
      style={{ width: size, height: size }}>
      <View
        className={styles.circle}
        style={{
          width: circleSize,
          height: circleSize,
        }}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: '100%' }}
            className={styles.image}
          />
        )}
        {isAddExerciseButton && <Feather name="plus" size={24} color="black" />}
      </View>
      <BadgeSmall index={index} onDelete={onDelete} />
    </TouchableOpacity>
  );
};

const styles = {
  container:
    'relative items-center justify-center rounded-full border-2 border-white bg-background',
  circle:
    'w-full h-full rounded-full items-center justify-center overflow-hidden bg-background border-1 border-background',
  image: 'w-full h-full',
  badge:
    'absolute border-2 border-white bottom-0 right-1 rounded-full w-5 h-5 flex items-center justify-center',
  deleteButton: 'absolute right-0 top-0 h-5 w-5 items-center justify-center rounded-full',
} as const;
