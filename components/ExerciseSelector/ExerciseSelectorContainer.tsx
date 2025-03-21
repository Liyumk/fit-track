import { FlatList, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { ExerciseCircle } from './ExerciseCircle';
import { useWorkout } from '../../context/WorkoutContext';

export default function ExerciseSelectorContainer() {
  const { workout, isEditMode } = useWorkout();
  const exercises = workout?.exercises;

  const renderExerciseItem = ({ item, index }: { item: any; index: number }) => (
    <ExerciseCircle key={index} image={item.asset_url} index={index} />
  );

  const renderAddExerciseButton = () => {
    if (!isEditMode) return null;
    return <ExerciseCircle key="add-exercise" index={exercises?.length ?? 0} />;
  };

  return (
    <View className={twMerge(styles.container)}>
      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        ListFooterComponent={renderAddExerciseButton}
        ListFooterComponentStyle={{ marginLeft: 12 }}
      />
    </View>
  );
}

const styles = {
  container: 'pt-4 pb-4',
  contentContainer: 'gap-4',
};
