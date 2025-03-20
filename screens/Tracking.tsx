import { Button } from 'components/Button';
import ExerciseDetailsContainer from 'components/ExerciseDetailsPannel/ExerciseDetailsContainer';
import ExerciseSelectorContainer from 'components/ExerciseSelector/ExerciseSelectorContainer';
import { ScreenContainer } from 'components/ScreenContainer';
import { useWorkout } from 'context/WorkoutContext';
import { useEffect } from 'react';
import { View } from 'react-native';
import { getColor } from 'theme/colors';

export default function Overview() {
  const { startWorkout, workout, setIsEditMode, isEditMode } = useWorkout();

  useEffect(() => {
    startWorkout();
  }, []);

  return (
    <ScreenContainer title={workout?.workout_name}>
      <ExerciseSelectorContainer />
      <View className="flex-0 px-4">
        <ExerciseDetailsContainer />
      </View>
      <View className="absolute bottom-0 flex w-full flex-row justify-center gap-4 px-4 ">
        {isEditMode && (
          <View className="border-1 inline-flex flex-row gap-4 rounded-full border-gray-200 bg-white p-5 ">
            <Button
              title="Discard"
              onPress={() => {
                setIsEditMode(false);
              }}
              style={{
                backgroundColor: getColor('gray.100'),
              }}
              textStyle={{ color: getColor('black') }}
              textClassName="text-sm"
            />
            <Button
              title="Save changes"
              onPress={() => {}}
              style={{
                backgroundColor: getColor('primary.main'),
              }}
              textStyle={{ color: getColor('black') }}
              textClassName="text-sm"
            />
          </View>
        )}
      </View>
    </ScreenContainer>
  );
}
