import { Button } from 'components/Button';
import { useWorkout } from 'context/WorkoutContext';
import { Text, View } from 'react-native';
import { getColor } from 'theme/colors';

import ExercisePreview from './ExercisePreview';

export default function ExerciseDetailsContainer() {
  const { workout, currentExerciseIndex } = useWorkout();
  const currentExercise = workout?.exercises[currentExerciseIndex];

  return (
    <View className={styles.container}>
      <View className="h-[64px] flex-row items-center justify-between">
        <Text className="text-primary-main text-lg font-medium">{currentExercise?.name}</Text>
        <View className="flex-row gap-2">
          <Button
            title="Replace"
            onPress={() => {}}
            style={{ backgroundColor: getColor('primary.main') }}
            textStyle={{ color: getColor('black') }}
            textClassName="text-sm"
          />
        </View>
      </View>
      <View className="border-1 rounded-xl border border-gray-200 p-1">
        <ExercisePreview />
      </View>
      <View className="flex flex-row gap-4">
        <Button
          title="Instructions"
          onPress={() => {}}
          style={{
            backgroundColor: getColor('white'),
            borderColor: getColor('black'),
            borderWidth: 1,
          }}
          textStyle={{ color: getColor('black') }}
          textClassName="text-sm"
        />
        <Button
          title="warmup"
          onPress={() => {}}
          style={{
            backgroundColor: getColor('white'),
            borderColor: getColor('black'),
            borderWidth: 1,
          }}
          textStyle={{ color: getColor('black') }}
          textClassName="text-sm"
        />
        <Button
          title="FAQ"
          onPress={() => {}}
          style={{
            backgroundColor: getColor('white'),
            borderColor: getColor('black'),
            borderWidth: 1,
          }}
          textStyle={{ color: getColor('black') }}
          textClassName="text-sm"
        />
      </View>
    </View>
  );
}

const styles = {
  container: 'p-4 pt-0 rounded-xl bg-white flex inline-flex gap-4',
};
