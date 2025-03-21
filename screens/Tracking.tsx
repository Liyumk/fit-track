import ExerciseDetailsContainer from 'components/ExerciseDetailsPannel/ExerciseDetailsContainer';
import ExerciseSelectorContainer from 'components/ExerciseSelector/ExerciseSelectorContainer';
import FloatingButtons from 'components/FloatingButtons';
import { ScreenContainer } from 'components/ScreenContainer';
import { useWorkout } from 'context/WorkoutContext';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

export default function Overview() {
  const { startWorkout, workout } = useWorkout();

  useEffect(() => {
    startWorkout();
  }, []);

  return (
    <ScreenContainer title={workout?.workout_name}>
      <ExerciseSelectorContainer />
      <ScrollView contentContainerClassName="flex-1 px-4">
        <ExerciseDetailsContainer />
      </ScrollView>
      <FloatingButtons />
    </ScreenContainer>
  );
}
