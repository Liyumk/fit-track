import { useWorkout } from 'context/WorkoutContext';
import { TouchableOpacity, View } from 'react-native';

import { MinusIcon, CheckIcon, PlayIcon } from '../../assets/svg/icons';
import { getColor } from '../../theme/colors';

const BadgeSmall = ({ index, onDelete }: { index: number; onDelete?: () => void }) => {
  const { isEditMode, currentExerciseIndex, completedExercises, workout } = useWorkout();
  const isActive = currentExerciseIndex === index;
  const isCompleted = completedExercises.has(index);
  const isActiveBadge = isActive && !isEditMode;
  const isCompletedBadge = isCompleted && !isEditMode && !isActive;
  const isLastItem = index === workout?.exercises?.length;
  const isAddExerciseButton = isEditMode && isLastItem;

  if (isEditMode && !isAddExerciseButton)
    return (
      <TouchableOpacity onPress={onDelete} className={styles.deleteButton}>
        <MinusIcon />
      </TouchableOpacity>
    );
  else if (isCompletedBadge)
    return (
      <View className={styles.badge} style={{ backgroundColor: getColor('primary.main') }}>
        <CheckIcon size={12} color={getColor('text.primary')} />
      </View>
    );
  else if (isActiveBadge)
    return (
      <View className={styles.badge} style={{ backgroundColor: getColor('primary.main') }}>
        <PlayIcon size={9} color={getColor('text.primary')} />
      </View>
    );
};

export default BadgeSmall;

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
