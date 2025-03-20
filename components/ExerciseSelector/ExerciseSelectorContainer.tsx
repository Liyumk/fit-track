import { FlatList, View } from 'react-native';

import { ExerciseCircle } from './ExerciseCircle';
import { useWorkout } from '../../context/WorkoutContext';

export default function ExerciseSelectorContainer() {
  const {
    workout,
    currentExerciseIndex,
    selectExercise,
    markExerciseAsCompleted,
    completedExercises,
    isEditMode,
    setIsEditMode,
  } = useWorkout();
  const exercises = workout?.exercises;

  const onSelectExercise = (index: number) => {
    selectExercise(index);
    for (let i = 0; i < index; i++) {
      markExerciseAsCompleted(i);
    }
  };

  const onEditMode = () => {
    setIsEditMode(true);
  };

  return (
    <View className={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item, index }) => (
          <ExerciseCircle
            key={index}
            isActive={index === currentExerciseIndex}
            image={item.asset_url}
            onPress={() => onSelectExercise(index)}
            isDone={completedExercises.has(index)}
            isEditMode={isEditMode}
            onLongPress={onEditMode}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
}

const styles = {
  container: 'pt-4 pb-4',
  contentContainer: 'gap-4',
};
