import { View } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import { twMerge } from 'tailwind-merge';

import { ExerciseCircle } from './ExerciseCircle';
import { useWorkout } from '../../context/WorkoutContext';
import { Exercise } from '../../types/workout';

export default function ExerciseSelectorContainer() {
  const {
    workout,
    isEditMode,
    updateWorkoutExercises,
    setIsEditMode,
    selectExercise,
    currentExerciseIndex,
  } = useWorkout();
  const exercises = workout?.exercises;

  const handleDragEnd = ({ data }: { data: Exercise[] }) => {
    updateWorkoutExercises(data);
    const draggedItemIndex = data.findIndex((item) => item === exercises?.[currentExerciseIndex]);
    if (draggedItemIndex !== -1) {
      selectExercise(draggedItemIndex);
    }
  };

  const handleDelete = (index: number) => {
    if (!exercises) return;
    const newExercises = [...exercises];
    newExercises.splice(index, 1);
    updateWorkoutExercises(newExercises);

    // If we deleted the currently selected exercise, select the previous one
    if (index === currentExerciseIndex) {
      selectExercise(Math.max(0, index - 1));
    }
    // If we deleted an exercise before the current one, update the current index
    else if (index < currentExerciseIndex) {
      selectExercise(currentExerciseIndex - 1);
    }
  };

  const renderExerciseItem = ({ item, drag, isActive }: RenderItemParams<Exercise>) => (
    <ExerciseCircle
      image={item.asset_url}
      index={exercises?.indexOf(item) ?? 0}
      onLongPress={isEditMode ? drag : () => setIsEditMode(true)}
      style={{ opacity: isActive ? 0.5 : 1 }}
      onDelete={() => handleDelete(exercises?.indexOf(item) ?? 0)}
    />
  );

  const renderAddExerciseButton = () => {
    if (!isEditMode) return null;
    return <ExerciseCircle key="add-exercise" index={exercises?.length ?? 0} />;
  };

  return (
    <View className={twMerge(styles.container)}>
      <DraggableFlatList
        data={exercises ?? []}
        renderItem={renderExerciseItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        ListFooterComponent={renderAddExerciseButton}
        ListFooterComponentStyle={{ marginLeft: 12 }}
        onDragEnd={handleDragEnd}
      />
    </View>
  );
}

const styles = {
  container: 'pt-4 pb-4',
  contentContainer: 'gap-4',
};
